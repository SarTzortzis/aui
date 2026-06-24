import { Component, forwardRef, Input } from "@angular/core";

import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { BaseControlValueAccessor } from "../../shared";

@Component({
  selector: "ui-checkbox",
  standalone: true,
  templateUrl: "./checkbox.component.html",
  styleUrls: ["./checkbox.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
})
export class CheckboxComponent extends BaseControlValueAccessor<boolean> {
  checked = false;
  @Input() override disabled = false;

  toggle(): void {
    if (this.disabled) {
      return;
    }

    this.checked = !this.checked;

    this.onChange(this.checked);
    this.onTouched();
  }
}
