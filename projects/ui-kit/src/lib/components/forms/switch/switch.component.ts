import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

import { BaseControlValueAccessor } from "../../../shared";

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
  @Input() value = false;

  @Input() override disabled = false;

  @Output() valueChange = new EventEmitter<boolean>();

  writeValue(value: boolean): void {
    this.value = value;
  }

  toggle(): void {
    if (this.disabled) {
      return;
    }

    this.value = !this.value;

    this.emitValueChange(this.value);

    this.valueChange.emit(this.value);
  }
}
