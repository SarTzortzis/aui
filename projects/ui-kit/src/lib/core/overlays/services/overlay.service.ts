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

  private hostElement: HTMLElement | null = null;

  constructor(
    private readonly appRef: ApplicationRef,
    private readonly environmentInjector: EnvironmentInjector,
  ) {}

  open<T>(component: Type<T>, config: OverlayConfig = {}): OverlayRef {
    let overlayRef!: OverlayRef;

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

    const host = this.hostElement ?? document.body;

    host.appendChild(componentRef.location.nativeElement);

    this.positionOverlay(componentRef.location.nativeElement, config);

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

  private positionOverlay(element: HTMLElement, config: OverlayConfig): void {
    if (!config.origin) {
      return;
    }

    requestAnimationFrame(() => {
      const rect = config.origin!.getBoundingClientRect();
      const overlayRect = element.getBoundingClientRect();

      const offset = config.offset ?? 8;
      const margin = 8;

      let position = config.position ?? "top";

      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      const calculate = (position: OverlayPositionName) => {
        switch (position) {
          case "bottom":
            return {
              top: rect.bottom + offset,
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

          case "top":
          default:
            return {
              top: rect.top - overlayRect.height - offset,
              left: rect.left + (rect.width - overlayRect.width) / 2,
            };
        }
      };

      const fits = (top: number, left: number) => {
        return (
          top >= margin &&
          left >= margin &&
          top + overlayRect.height <= viewportHeight - margin &&
          left + overlayRect.width <= viewportWidth - margin
        );
      };

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

      coordinates.top = Math.min(
        Math.max(coordinates.top, margin),
        viewportHeight - overlayRect.height - margin,
      );

      coordinates.left = Math.min(
        Math.max(coordinates.left, margin),
        viewportWidth - overlayRect.width - margin,
      );

      element.style.position = "fixed";
      element.style.top = `${coordinates.top}px`;
      element.style.left = `${coordinates.left}px`;
    });
  }
  private dispose(
    componentRef: ComponentRef<unknown>,
    overlayRef: OverlayRef,
  ): void {
    this.appRef.detachView(componentRef.hostView);

    componentRef.destroy();

    this.overlays.delete(overlayRef);
  }
}
