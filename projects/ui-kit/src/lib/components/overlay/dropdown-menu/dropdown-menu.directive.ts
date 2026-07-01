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

  private previouslyFocused?: HTMLElement;

  @Input("uiDropdownMenu")
  content?: TemplateRef<unknown>;

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
    console.log(this.content);
    if (!this.content || this.overlayRef) {
      return;
    }

    this.previouslyFocused = document.activeElement as HTMLElement;

    this.overlayRef = this.overlayService.open(DropdownMenuComponent, {
      origin: this.elementRef.nativeElement,
      position: "bottom",
      onOriginHidden: () => this.close(),
    });

    const component = this.overlayRef.getComponentRef<DropdownMenuComponent>();
    console.log(component.instance);
    console.log(component.location.nativeElement);

    component.instance.content = this.content!;
    component.changeDetectorRef.detectChanges();
    component.changeDetectorRef.detectChanges();

    const trigger = this.elementRef.nativeElement;

    trigger.setAttribute("aria-expanded", "true");
    trigger.setAttribute("aria-haspopup", "menu");

    queueMicrotask(() => {
      (component.location.nativeElement as HTMLElement)
        .querySelector<HTMLElement>(".ui-menu")
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
