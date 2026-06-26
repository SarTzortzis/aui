import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from "@angular/core";

import { NG_VALUE_ACCESSOR } from "@angular/forms";

import { NgClass } from "@angular/common";
import { TextareaSize } from "./textarea.types";
import { BaseControlValueAccessor } from "../../../shared";

@Component({
  selector: "ui-textarea",
  standalone: true,
  imports: [NgClass],
  templateUrl: "./textarea.component.html",
  styleUrls: ["./textarea.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true,
    },
  ],
})
export class TextareaComponent extends BaseControlValueAccessor<string> {
  @Input() label = "";
  @Input() placeholder = "";
  @Input() override disabled = false;

  @Input() helperText = "";
  @Input() errorText = "";

  @Input() required = false;
  @Input() error = false;

  @Input() rows = 4;
  @Input() size: TextareaSize = "medium";

  @Input() value = "";

  @Output() valueChange = new EventEmitter<string>();

  writeValue(value: string): void {
    this.value = value;
  }

  onInput(event: Event): void {
    this.value = (event.target as HTMLTextAreaElement).value;

    this.emitValueChange(this.value);

    this.valueChange.emit(this.value);
  }

  onBlur(): void {
    this.onTouched();
  }
}
