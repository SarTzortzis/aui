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

    const rect = config.origin.getBoundingClientRect();

    const offset = config.offset ?? 8;

    element.style.position = "fixed";

    switch (config.position) {
      case "bottom":
        element.style.left = `${rect.left}px`;
        element.style.top = `${rect.bottom + offset}px`;

        break;

      case "left":
        element.style.left = `${rect.left - element.offsetWidth - offset}px`;
        element.style.top = `${rect.top}px`;

        break;

      case "right":
        element.style.left = `${rect.right + offset}px`;
        element.style.top = `${rect.top}px`;

        break;

      case "top":
      default:
        element.style.left = `${rect.left}px`;
        element.style.top = `${rect.top - element.offsetHeight - offset}px`;

        break;
    }
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
