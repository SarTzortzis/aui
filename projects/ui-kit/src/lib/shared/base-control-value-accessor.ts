import { ControlValueAccessor } from "@angular/forms";

export abstract class BaseControlValueAccessor<
  T,
> implements ControlValueAccessor {
  disabled = false;

  protected onChange: (value: T) => void = () => {};

  protected onTouched: () => void = () => {};

  abstract writeValue(value: T): void;

  registerOnChange(fn: (value: T) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  protected emitValueChange(value: T): void {
    this.onChange(value);
    this.onTouched();
  }
}
