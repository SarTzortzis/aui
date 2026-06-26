import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from "@angular/core";

import { NG_VALUE_ACCESSOR } from "@angular/forms";

import { InputSize, InputType } from "./input.types";
import { BaseControlValueAccessor } from "../../../shared";

@Component({
  selector: "ui-input",
  standalone: true,
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent extends BaseControlValueAccessor<string> {
  @Input() label = "";
  @Input() placeholder = "";
  @Input() helperText = "";
  @Input() errorText = "";

  @Input() override disabled = false;

  @Input() required = false;
  @Input() error = false;

  @Input() size: InputSize = "medium";
  @Input() type: InputType = "text";

  @Input() value = "";

  @Output() valueChange = new EventEmitter<string>();

  writeValue(value: string): void {
    this.value = value;
  }

  onInput(event: Event): void {
    this.value = (event.target as HTMLInputElement).value;

    this.emitValueChange(this.value);

    this.valueChange.emit(this.value);
  }

  onBlur(): void {
    this.onTouched();
  }
}
