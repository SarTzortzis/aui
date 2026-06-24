import { Component, forwardRef, Input } from '@angular/core';

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { InputSize, InputType } from './input.types';

@Component({
  selector: 'ui-input',
  standalone: true,
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() helperText = '';
  @Input() errorText = '';

  @Input() required = false;
  @Input() error = false;

  @Input() size: InputSize = 'medium';
  @Input() type: InputType = 'text';

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
    const value = (event.target as HTMLInputElement).value;

    this.value = value;
    this.onChange(value);
  }

  onBlur(): void {
    this.onTouched();
  }
}
