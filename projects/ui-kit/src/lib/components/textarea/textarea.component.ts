import { Component, forwardRef, Input } from '@angular/core';

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { NgClass } from '@angular/common';
import { TextareaSize } from './textarea.types';

@Component({
  selector: 'ui-textarea',
  standalone: true,
  imports: [NgClass],
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true,
    },
  ],
})
export class TextareaComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() placeholder = '';

  @Input() helperText = '';
  @Input() errorText = '';

  @Input() required = false;
  @Input() error = false;

  @Input() rows = 4;
  @Input() size: TextareaSize = 'medium';

  value = '';
  disabled = false;

  private onChange = (value: string) => {};
  private onTouched = () => {};

  writeValue(value: string): void {
    this.value = value ?? '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInput(event: Event): void {
    const value = (event.target as HTMLTextAreaElement).value;

    this.value = value;
    this.onChange(value);
  }

  onBlur(): void {
    this.onTouched();
  }
}
