import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  TemplateRef,
  inject,
} from "@angular/core";

import { OverlayRef, OverlayService } from "../../../core/overlays";

import { DropdownMenuComponent } from "./dropdown-menu.component";

@Directive({
  selector: "[uiDropdownMenu]",
  standalone: true,
})
export class DropdownMenuDirective {
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly overlayService = inject(OverlayService);
  private overlayRef?: OverlayRef;
  private openingEvent?: MouseEvent;

  private previouslyFocused?: HTMLElement;

  @Input("uiDropdownMenu")
  content?: TemplateRef<unknown>;

  @HostListener("click", ["$event"])
  onClick(event: MouseEvent): void {
    event.stopPropagation();

    this.openingEvent = event;

    this.toggle();

    queueMicrotask(() => {
      this.openingEvent = undefined;
    });
  }

  @HostListener("document:click", ["$event"])
  onDocumentClick(event: MouseEvent): void {
    if (!this.overlayRef) {
      return;
    }

    // Ignore the click that opened this overlay.
    if (event === this.openingEvent) {
      return;
    }

    const target = event.target as Node;

    const trigger = this.elementRef.nativeElement;

    const menu = this.overlayRef.getComponentRef<DropdownMenuComponent>()
      .location.nativeElement as HTMLElement;

    if (trigger.contains(target) || menu.contains(target)) {
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

    this.overlayRef = this.overlayService.open(DropdownMenuComponent, {
      origin: this.elementRef.nativeElement,
      position: "bottom",
      onOriginHidden: () => this.close(),
    });
    this.overlayRef.afterClosed().subscribe(() => {
      this.overlayRef = undefined;
      this.elementRef.nativeElement.setAttribute("aria-expanded", "false");
    });

    this.previouslyFocused = document.activeElement as HTMLElement;

    const component = this.overlayRef.getComponentRef<DropdownMenuComponent>();

    component.setInput("content", this.content);

    const trigger = this.elementRef.nativeElement;

    trigger.setAttribute("aria-expanded", "true");
    trigger.setAttribute("aria-haspopup", "menu");

    queueMicrotask(() => {
      (component.location.nativeElement as HTMLElement)
        .querySelector<HTMLElement>(".ui-menu")
        ?.focus();
    });
  }

  close(restoreFocus = true): void {
    if (!this.overlayRef) {
      return;
    }

    const overlayRef = this.overlayRef;

    overlayRef.close();

    if (restoreFocus) {
      this.previouslyFocused?.focus();
    }
  }

  toggle(): void {
    this.overlayRef ? this.close() : this.open();
  }
}
