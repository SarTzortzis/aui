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

  private previouslyFocused?: HTMLElement;

  @Input("auiPopover")
  content?: TemplateRef<unknown>;

  @Input()
  auiPopoverRole = "dialog";

  @Input()
  auiPopoverAriaLabel?: string;

  @Input()
  auiPopoverAriaLabelledBy?: string;

  @Input()
  auiPopoverAriaDescribedBy?: string;

  @HostListener("click", ["$event"])
  onClick(event: MouseEvent): void {
    event.stopPropagation();

    this.toggle();
  }

  @HostListener("document:click", ["$event"])
  onDocumentClick(event: MouseEvent): void {
    if (!this.overlayRef) {
      return;
    }

    const target = event.target as Node;

    const trigger = this.elementRef.nativeElement;

    const popover = this.overlayRef.getComponentRef<PopoverComponent>().location
      .nativeElement as HTMLElement;

    if (trigger.contains(target) || popover.contains(target)) {
      return;
    }

    this.close();
  }

  @HostListener("document:keydown.escape")
  onEscape(): void {
    this.close();
  }

  open(): void {
    if (!this.content || this.overlayRef) {
      return;
    }

    this.previouslyFocused = document.activeElement as HTMLElement;

    this.overlayRef = this.overlayService.open(PopoverComponent, {
      origin: this.elementRef.nativeElement,
      position: "bottom",
      onOriginHidden: () => this.close(),
    });

    const component = this.overlayRef.getComponentRef<PopoverComponent>();

    component.setInput("content", this.content);
    component.setInput("role", this.auiPopoverRole);
    component.setInput("ariaLabel", this.auiPopoverAriaLabel);
    component.setInput("ariaLabelledBy", this.auiPopoverAriaLabelledBy);
    component.setInput("ariaDescribedBy", this.auiPopoverAriaDescribedBy);

    const trigger = this.elementRef.nativeElement;

    trigger.setAttribute("aria-expanded", "true");

    queueMicrotask(() => {
      (component.location.nativeElement as HTMLElement)
        .querySelector<HTMLElement>(".aui-popover")
        ?.focus();
    });
  }

  close(): void {
    if (!this.overlayRef) {
      return;
    }

    const overlayRef = this.overlayRef;

    this.overlayRef = undefined;

    overlayRef.close();

    const trigger = this.elementRef.nativeElement;

    trigger.setAttribute("aria-expanded", "false");

    this.previouslyFocused?.focus();
  }

  toggle(): void {
    this.overlayRef ? this.close() : this.open();
  }
}
