import { Component, forwardRef, Input } from "@angular/core";

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

  onInput(event: Event): void {
    const value = (event.target as HTMLTextAreaElement).value;

    this.value = value;
    this.onChange(value);
  }

  onBlur(): void {
    this.onTouched();
  }
}
