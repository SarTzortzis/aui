import { Component, Input } from "@angular/core";
import { NgClass } from "@angular/common";

import { IconComponent } from "../icon";
import { Color } from "../../../models";

@Component({
  selector: "ui-alert",
  standalone: true,
  imports: [NgClass, IconComponent],
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.scss"],
})
export class AlertComponent {
  @Input() color: Color = "primary";

  get classes(): string[] {
    return ["ui-alert", `color-${this.color}`];
  }

  get icon(): string {
    switch (this.color) {
      case "success":
        return "✓";

      case "danger":
        return "✕";

      case "warning":
        return "!";

      case "secondary":
        return "•";

      case "primary":
      default:
        return "i";
    }
  }
}
