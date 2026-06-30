import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  inject,
} from "@angular/core";

import { OverlayPositionName } from "../../../core/overlays/models/overlay-position";
import { OverlayRef, OverlayService } from "../../../core/overlays";
import { TooltipComponent } from "./tooltip.component";

@Directive({
  selector: "[auiTooltip]",
  standalone: true,
})
export class TooltipDirective {
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly overlayService = inject(OverlayService);

  private overlayRef?: OverlayRef;

  private showTimeout?: number;
  private hideTimeout?: number;

  @Input("auiTooltip")
  text = "";

  @Input()
  tooltipPosition: OverlayPositionName = "top";

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
    window.clearTimeout(this.showTimeout);

    this.showTimeout = window.setTimeout(() => {
      if (this.overlayRef) {
        return;
      }

      this.overlayRef = this.overlayService.open(TooltipComponent, {
        origin: this.elementRef.nativeElement,
        position: this.tooltipPosition,
      });

      const tooltip = this.overlayRef.getComponentRef<TooltipComponent>();

      tooltip.setInput("text", this.text);
      tooltip.setInput("placement", this.tooltipPosition);
    }, this.showDelay);
  }

  private hide(): void {
    window.clearTimeout(this.showTimeout);
    window.clearTimeout(this.hideTimeout);

    this.hideTimeout = window.setTimeout(() => {
      this.hideImmediately();
    }, this.hideDelay);
  }

  private hideImmediately(): void {
    window.clearTimeout(this.showTimeout);
    window.clearTimeout(this.hideTimeout);

    const overlay = this.overlayRef;

    this.overlayRef = undefined;

    window.setTimeout(() => {
      overlay?.close();
    }, 100);
  }
}
