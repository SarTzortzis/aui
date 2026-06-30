import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from "@angular/core";

@Directive({
  selector: "[uiClickOutside]",
  standalone: true,
  exportAs: "uiClickOutside",
})
export class ClickOutsideDirective {
  @Output()
  readonly clickOutside = new EventEmitter<void>();

  private excludedElements: readonly (HTMLElement | null | undefined)[] = [];

  constructor(private readonly elementRef: ElementRef<HTMLElement>) {}

  setExcludedElements(
    elements: readonly (HTMLElement | null | undefined)[],
  ): void {
    this.excludedElements = elements;
  }

  clearExcludedElements(): void {
    this.excludedElements = [];
  }

  @HostListener("document:click", ["$event"])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as Node;

    const host = this.elementRef.nativeElement;

    if (host.contains(target)) {
      return;
    }

    const clickedExcluded = this.excludedElements.some((element) =>
      element?.contains(target),
    );

    if (clickedExcluded) {
      return;
    }

    this.clickOutside.emit();
  }
}
