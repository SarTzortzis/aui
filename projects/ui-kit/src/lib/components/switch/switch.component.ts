import { Component, forwardRef, Input } from '@angular/core';

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ui-switch',
  standalone: true,
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitchComponent),
      multi: true,
    },
  ],
})
export class SwitchComponent implements ControlValueAccessor {
  @Input() disabled = false;

  checked = false;

  private onChange = (_value: boolean) => {};
  private onTouched = () => {};

  writeValue(value: boolean): void {
    this.checked = !!value;
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

  toggle(): void {
    if (this.disabled) {
      return;
    }

    this.checked = !this.checked;

    this.onChange(this.checked);
    this.onTouched();
  }
}
