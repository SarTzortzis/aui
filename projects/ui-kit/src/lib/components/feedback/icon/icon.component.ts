import { Component, Input } from "@angular/core";

import { Color, Size } from "../../../models/component.types";

@Component({
  selector: "ui-icon",
  standalone: true,
  templateUrl: "./icon.component.html",
  styleUrls: ["./icon.component.scss"],
})
export class IconComponent {
  @Input() size: Size = "medium";

  @Input() color: Color | "inherit" = "inherit";

  get classes(): string[] {
    return [`size-${this.size}`, `color-${this.color}`];
  }
}
