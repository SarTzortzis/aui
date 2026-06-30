import { Component, Input } from "@angular/core";
import { NgStyle } from "@angular/common";

export type StackDirection = "row" | "column";

export type StackAlign = "start" | "center" | "end" | "stretch" | "baseline";

export type StackJustify =
  | "start"
  | "center"
  | "end"
  | "between"
  | "around"
  | "evenly";

@Component({
  selector: "ui-stack",
  standalone: true,
  imports: [NgStyle],
  templateUrl: "./stack.component.html",
  styleUrls: ["./stack.component.scss"],
})
export class StackComponent {
  @Input() direction: StackDirection = "column";

  @Input() gap = "md";

  @Input() align: StackAlign = "stretch";

  @Input() justify: StackJustify = "start";

  @Input() wrap = false;

  @Input() fullWidth = false;

  @Input() fullHeight = false;

  get styles() {
    return {
      flexDirection: this.direction,
      gap: `var(--ui-spacing-${this.gap})`,
      alignItems: this.alignValue,
      justifyContent: this.justifyValue,
      flexWrap: this.wrap ? "wrap" : "nowrap",
      width: this.fullWidth ? "100%" : null,
      height: this.fullHeight ? "100%" : null,
    };
  }

  private get alignValue() {
    switch (this.align) {
      case "start":
        return "flex-start";

      case "end":
        return "flex-end";

      default:
        return this.align;
    }
  }

  private get justifyValue() {
    switch (this.justify) {
      case "start":
        return "flex-start";

      case "end":
        return "flex-end";

      case "between":
        return "space-between";

      case "around":
        return "space-around";

      case "evenly":
        return "space-evenly";

      default:
        return this.justify;
    }
  }
}
