import { Component, forwardRef, Input } from "@angular/core";

import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { BaseControlValueAccessor } from "../../shared";

@Component({
  selector: "ui-switch",
  standalone: true,
  templateUrl: "./switch.component.html",
  styleUrls: ["./switch.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitchComponent),
      multi: true,
    },
  ],
})
export class SwitchComponent extends BaseControlValueAccessor<boolean> {
  @Input() override disabled = false;

  checked = false;

  toggle(): void {
    if (this.disabled) {
      return;
    }

    this.checked = !this.checked;

    this.onChange(this.checked);
    this.onTouched();
  }
}
