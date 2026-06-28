import { ChangeDetectionStrategy, Component, input } from "@angular/core";

@Component({
  selector: "aui-form-field",
  standalone: true,
  templateUrl: "./form-field.component.html",
  styleUrl: "./form-field.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldComponent {
  readonly label = input<string>();

  readonly helperText = input<string>();

  readonly errorText = input<string>();

  readonly required = input(false);
}
