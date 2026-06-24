import { Component, Input, forwardRef } from "@angular/core";

import { NG_VALUE_ACCESSOR } from "@angular/forms";

import { RadioOption } from "./radio-group.types";
import { BaseControlValueAccessor } from "../../shared";

@Component({
  selector: "ui-radio-group",
  standalone: true,
  templateUrl: "./radio-group.component.html",
  styleUrls: ["./radio-group.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioGroupComponent),
      multi: true,
    },
  ],
})
export class RadioGroupComponent extends BaseControlValueAccessor<string> {
  @Input() options: RadioOption[] = [];
  @Input() override disabled = false;

  select(value: string): void {
    if (this.disabled) {
      return;
    }

    this.value = value;

    this.onChange(value);
    this.onTouched();
  }
}
