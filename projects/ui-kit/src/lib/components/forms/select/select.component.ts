import { Component, ElementRef, Input } from "@angular/core";
import { BaseControlValueAccessor } from "../../../shared/base-control-value-accessor";
import { ClickOutsideDirective } from "../../../directives";
import { Option } from "../../../models";
import { IconComponent } from "../../feedback/icon";

@Component({
  selector: "ui-select",
  standalone: true,
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.scss"],
  imports: [ClickOutsideDirective, IconComponent],
})
export class SelectComponent extends BaseControlValueAccessor<string> {
  @Input() label = "";

  @Input() placeholder = "Select...";

  @Input() options: Option[] = [];

  @Input() override disabled = false;

  isOpen = false;

  override value = "";

  get selectedOption(): Option | undefined {
    return this.options.find((option) => option.value === this.value);
  }

  toggle(): void {
    if (this.disabled) {
      return;
    }

    this.isOpen = !this.isOpen;
  }

  close(): void {
    this.isOpen = false;
  }

  select(option: Option): void {
    if (option.disabled || this.disabled) {
      return;
    }

    this.value = option.value;

    this.onChange(this.value);

    this.onTouched();

    this.close();
  }
}
