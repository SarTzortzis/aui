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
  /**
   * Currently opened overlays.
   */
  private readonly overlays = new Set<OverlayRef>();

  /**
   * Global overlay host.
   * Falls back to document.body until the OverlayContainerComponent
   * registers itself.
   */
  private hostElement: HTMLElement | null = null;

  constructor(
    private readonly appRef: ApplicationRef,
    private readonly environmentInjector: EnvironmentInjector,
  ) {}

  /**
   * Opens a component inside the overlay host.
   */
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

    const componentRef: ComponentRef<T> = createComponent(component, {
      environmentInjector: this.environmentInjector,
      elementInjector: injector,
    });

    overlayRef = new OverlayRef(componentRef, () =>
      this.dispose(componentRef, overlayRef),
    );

    this.appRef.attachView(componentRef.hostView);

    const host = this.hostElement ?? document.body;

    host.appendChild(componentRef.location.nativeElement);

    this.overlays.add(overlayRef);

    return overlayRef;
  }

  /**
   * Closes every opened overlay.
   */
  closeAll(): void {
    [...this.overlays].forEach((ref) => ref.close());
  }

  /**
   * Returns true if at least one overlay is opened.
   */
  hasOpenOverlays(): boolean {
    return this.overlays.size > 0;
  }

  /**
   * Returns all currently opened overlays.
   */
  getOpenOverlays(): readonly OverlayRef[] {
    return [...this.overlays];
  }

  /**
   * Registers the global overlay host.
   */
  setHostElement(element: HTMLElement | null): void {
    this.hostElement = element;
  }

  /**
   * Cleans up an overlay instance.
   */
  private dispose(
    componentRef: ComponentRef<unknown>,
    overlayRef: OverlayRef,
  ): void {
    this.appRef.detachView(componentRef.hostView);

    componentRef.destroy();

    this.overlays.delete(overlayRef);
  }
}
