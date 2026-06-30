import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  inject,
} from "@angular/core";

import { TooltipComponent } from "./tooltip.component";
import { OverlayRef, OverlayService } from "../../../core/overlays";

@Directive({
  selector: "[auiTooltip]",
  standalone: true,
})
export class TooltipDirective {
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly overlay = inject(OverlayService);

  private overlayRef?: OverlayRef;

  private showTimeout?: number;
  private hideTimeout?: number;

  @Input("auiTooltip")
  text = "";

  @Input()
  tooltipPosition: "top" | "bottom" | "left" | "right" = "top";

  @Input()
  tooltipDisabled = false;

  @Input()
  showDelay = 150;

  @Input()
  hideDelay = 100;

  @HostListener("mouseenter")
  onMouseEnter(): void {
    this.show();
  }

  @HostListener("mouseleave")
  onMouseLeave(): void {
    this.hide();
  }

  @HostListener("focus")
  onFocus(): void {
    this.show();
  }

  @HostListener("blur")
  onBlur(): void {
    this.hide();
  }

  @HostListener("keydown.escape")
  onEscape(): void {
    this.hideImmediately();
  }

  private show(): void {
    if (this.tooltipDisabled || !this.text) {
      return;
    }

    window.clearTimeout(this.hideTimeout);

    this.showTimeout = window.setTimeout(() => {
      if (this.overlayRef) {
        return;
      }

      this.overlayRef = this.overlay.open(TooltipComponent, {
        origin: this.elementRef.nativeElement,
        position: this.tooltipPosition,
      });

      this.overlayRef
        .getComponentRef<TooltipComponent>()
        .setInput("text", this.text);
    }, this.showDelay);
  }

  private hide(): void {
    window.clearTimeout(this.showTimeout);

    this.hideTimeout = window.setTimeout(() => {
      this.hideImmediately();
    }, this.hideDelay);
  }

  private hideImmediately(): void {
    this.overlayRef?.close();

    this.overlayRef = undefined;
  }
}
