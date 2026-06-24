import { Component, ElementRef, HostListener, Input } from "@angular/core";

import { SelectOption } from "./select.types";
import { BaseControlValueAccessor } from "../../shared/base-control-value-accessor";

@Component({
  selector: "ui-select",
  standalone: true,
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.scss"],
})
export class SelectComponent extends BaseControlValueAccessor<string | null> {
  @Input() label = "";
  @Input() placeholder = "Select an option";
  @Input() override disabled = false;

  @Input() options: SelectOption[] = [];

  isOpen = false;

  constructor(private readonly elementRef: ElementRef<HTMLElement>) {
    super();
  }

  get selectedLabel(): string {
    const selected = this.options.find((option) => option.value === this.value);

    return selected?.label ?? this.placeholder;
  }

  toggle(): void {
    if (this.disabled) {
      return;
    }

    this.isOpen = !this.isOpen;
  }

  select(option: SelectOption): void {
    if (option.disabled || this.disabled) {
      return;
    }

    this.value = option.value;

    this.onChange(option.value);
    this.onTouched();

    this.isOpen = false;
  }

  @HostListener("document:click", ["$event"])
  onDocumentClick(event: MouseEvent): void {
    const clickedInside = this.elementRef.nativeElement.contains(
      event.target as Node,
    );

    if (!clickedInside) {
      this.isOpen = false;
    }
  }
}
