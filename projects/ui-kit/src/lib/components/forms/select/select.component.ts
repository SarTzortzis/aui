import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
import { BaseControlValueAccessor } from "../../../shared/base-control-value-accessor";
import { ClickOutsideDirective } from "../../../directives";
import { Option } from "../../../models";
import { IconComponent } from "../../feedback/icon";

@Component({
  selector: "ui-select",
  standalone: true,
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.scss"],
  imports: [ClickOutsideDirective, IconComponent],
})
export class SelectComponent extends BaseControlValueAccessor<string> {
  @Input() label = "";
  @Input() placeholder = "Select...";
  @Input() options: Option[] = [];
  @Input() override disabled = false;
  @Input() value: string | null = null;

  @Output() valueChange = new EventEmitter<string | null>();

  isOpen = false;

  writeValue(value: string): void {
    this.value = value;
  }

  get selectedOption(): Option | undefined {
    return this.options.find((option) => option.value === this.value);
  }

  toggle(): void {
    if (this.disabled) {
      return;
    }

    this.isOpen = !this.isOpen;
  }

  close(): void {
    this.isOpen = false;
  }

  select(option: Option): void {
    if (option.disabled || this.disabled) {
      return;
    }

    this.value = option.value;

    this.value = option.value;

    this.emitValueChange(this.value);

    this.valueChange.emit(this.value);

    this.close();
  }
}
