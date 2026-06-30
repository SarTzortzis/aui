import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  TemplateRef,
  inject,
} from "@angular/core";

import { OverlayRef, OverlayService } from "../../../core/overlays";

import { PopoverComponent } from "./popover.component";

@Directive({
  selector: "[auiPopover]",
  standalone: true,
})
export class PopoverDirective {
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly overlayService = inject(OverlayService);

  private overlayRef?: OverlayRef;

  @Input("auiPopover")
  content?: TemplateRef<unknown>;

  @HostListener("click", ["$event"])
  onClick(event: MouseEvent): void {
    event.stopPropagation();

    if (this.overlayRef) {
      this.close();
      return;
    }

    this.open();
  }

  @HostListener("document:click")
  onDocumentClick(): void {
    this.close();
  }

  @HostListener("document:keydown.escape")
  onEscape(): void {
    this.close();
  }

  private open(): void {
    if (!this.content) {
      return;
    }

    this.overlayRef = this.overlayService.open(PopoverComponent, {
      origin: this.elementRef.nativeElement,
      position: "bottom",
    });

    const popover = this.overlayRef.getComponentRef<PopoverComponent>();

    popover.setInput("content", this.content);
  }

  private close(): void {
    this.overlayRef?.close();

    this.overlayRef = undefined;
  }
}
