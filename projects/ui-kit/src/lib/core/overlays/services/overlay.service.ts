import {
  ApplicationRef,
  ComponentRef,
  EnvironmentInjector,
  Injectable,
  Injector,
  Type,
  createComponent,
} from "@angular/core";

import { OverlayConfig } from "../models/overlay-config";
import { OverlayRef } from "../models/overlay-ref";
import { AUI_OVERLAY_CONFIG, AUI_OVERLAY_REF } from "../tokens/overlay.tokens";
import { OverlayPositionName } from "../models/overlay-position";

@Injectable({
  providedIn: "root",
})
export class OverlayService {
  private readonly overlays = new Set<OverlayRef>();
  private activeOverlay: OverlayRef | null = null;

  private readonly cleanupMap = new WeakMap<OverlayRef, () => void>();

  private hostElement: HTMLElement | null = null;

  constructor(
    private readonly appRef: ApplicationRef,
    private readonly environmentInjector: EnvironmentInjector,
  ) {}

  open<T>(component: Type<T>, config: OverlayConfig = {}): OverlayRef {
    let overlayRef!: OverlayRef;

    if (this.overlays.size > 0) {
      const overlays = [...this.overlays];

      // Prevent mutation while iterating.
      this.overlays.clear();

      overlays.forEach((overlay) => overlay.close());
    }
    const injector = Injector.create({
      parent: this.environmentInjector,
      providers: [
        {
          provide: AUI_OVERLAY_CONFIG,
          useValue: config,
        },
        {
          provide: AUI_OVERLAY_REF,
          useFactory: () => overlayRef,
        },
      ],
    });

    const componentRef = createComponent(component, {
      environmentInjector: this.environmentInjector,
      elementInjector: injector,
    });

    overlayRef = new OverlayRef(componentRef, () =>
      this.dispose(componentRef, overlayRef),
    );

    this.appRef.attachView(componentRef.hostView);

    const element = componentRef.location.nativeElement as HTMLElement;

    // Prevent layout shift before positioning
    element.style.position = "fixed";
    element.style.top = "0";
    element.style.left = "0";
    element.style.visibility = "hidden";
    element.style.pointerEvents = "none";

    const host = this.hostElement ?? document.body;

    host.appendChild(element);

    componentRef.changeDetectorRef.detectChanges();

    requestAnimationFrame(() => {
      this.positionOverlay(element, config);
    });

    this.registerAutoPositioning(element, config, overlayRef);

    this.overlays.add(overlayRef);

    return overlayRef;
  }

  closeAll(): void {
    [...this.overlays].forEach((ref) => ref.close());
  }

  hasOpenOverlays(): boolean {
    return this.overlays.size > 0;
  }

  getOpenOverlays(): readonly OverlayRef[] {
    return [...this.overlays];
  }

  setHostElement(element: HTMLElement | null): void {
    this.hostElement = element;
  }
  closeAllExcept(except?: OverlayRef): void {
    [...this.overlays].forEach((ref) => {
      if (ref !== except) {
        ref.close();
      }
    });
  }

  private registerAutoPositioning(
    element: HTMLElement,
    config: OverlayConfig,
    overlayRef: OverlayRef,
  ): void {
    if (!config.origin) {
      return;
    }

    const update = () => {
      if (!config.origin?.isConnected) {
        config.onOriginHidden?.();
        return;
      }

      this.positionOverlay(element, config);
    };

    window.addEventListener("scroll", update, true);
    window.addEventListener("resize", update);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          config.onOriginHidden?.();
        }
      },
      {
        threshold: 0,
      },
    );

    observer.observe(config.origin);

    this.cleanupMap.set(overlayRef, () => {
      window.removeEventListener("scroll", update, true);
      window.removeEventListener("resize", update);

      observer.disconnect();
    });
  }

  private positionOverlay(element: HTMLElement, config: OverlayConfig): void {
    if (!config.origin) {
      return;
    }

    const rect = config.origin.getBoundingClientRect();

    const overlayRect = element.getBoundingClientRect();

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const offset = config.offset ?? 8;
    const margin = 8;

    let position = config.position ?? "bottom";

    const calculate = (position: OverlayPositionName) => {
      switch (position) {
        case "top":
          return {
            top: rect.top - overlayRect.height - offset,
            left: rect.left + (rect.width - overlayRect.width) / 2,
          };

        case "left":
          return {
            top: rect.top + (rect.height - overlayRect.height) / 2,
            left: rect.left - overlayRect.width - offset,
          };

        case "right":
          return {
            top: rect.top + (rect.height - overlayRect.height) / 2,
            left: rect.right + offset,
          };

        case "bottom":
        default:
          return {
            top: rect.bottom + offset,
            left: rect.left + (rect.width - overlayRect.width) / 2,
          };
      }
    };

    const fits = (top: number, left: number) =>
      top >= margin &&
      left >= margin &&
      top + overlayRect.height <= viewportHeight - margin &&
      left + overlayRect.width <= viewportWidth - margin;

    let coordinates = calculate(position);

    if (!fits(coordinates.top, coordinates.left)) {
      switch (position) {
        case "top":
          position = "bottom";
          break;

        case "bottom":
          position = "top";
          break;

        case "left":
          position = "right";
          break;

        case "right":
          position = "left";
          break;
      }

      coordinates = calculate(position);
    }

    coordinates.top = Math.max(
      margin,
      Math.min(coordinates.top, viewportHeight - overlayRect.height - margin),
    );

    coordinates.left = Math.max(
      margin,
      Math.min(coordinates.left, viewportWidth - overlayRect.width - margin),
    );

    element.style.top = `${coordinates.top}px`;
    element.style.left = `${coordinates.left}px`;
    element.style.visibility = "visible";
    element.style.pointerEvents = "";
  }

  private dispose(
    componentRef: ComponentRef<unknown>,
    overlayRef: OverlayRef,
  ): void {
    this.cleanupMap.get(overlayRef)?.();

    this.cleanupMap.delete(overlayRef);

    this.appRef.detachView(componentRef.hostView);

    componentRef.destroy();

    this.overlays.delete(overlayRef);
  }
}
