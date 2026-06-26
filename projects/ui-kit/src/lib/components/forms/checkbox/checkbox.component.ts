import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { BaseControlValueAccessor } from "../../../shared";
import { IconComponent } from "../../feedback/icon";

@Component({
  selector: "ui-checkbox",
  standalone: true,
  templateUrl: "./checkbox.component.html",
  styleUrls: ["./checkbox.component.scss"],
  imports: [IconComponent],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
})
export class CheckboxComponent extends BaseControlValueAccessor<boolean> {
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
