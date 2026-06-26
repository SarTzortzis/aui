import { Component, Input } from "@angular/core";
import { Size } from "../../../models";

@Component({
  selector: "ui-spinner",
  standalone: true,
  templateUrl: "./spinner.component.html",
  styleUrls: ["./spinner.component.scss"],
})
export class SpinnerComponent {
  @Input() size: Size = "medium";

  get classes(): string[] {
    return [`size-${this.size}`];
  }
}
