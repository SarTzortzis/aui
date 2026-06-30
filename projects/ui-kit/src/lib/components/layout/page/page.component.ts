import { Component, HostBinding, Input, booleanAttribute } from "@angular/core";

export type PageSize = "sm" | "md" | "lg" | "xl";

@Component({
  selector: "ui-page",
  standalone: true,
  templateUrl: "./page.component.html",
  styleUrls: ["./page.component.scss"],
})
export class PageComponent {
  @HostBinding("class")
  get hostClasses(): string {
    return [
      "ui-page",
      `ui-page--${this.size}`,
      this.fluid ? "ui-page--fluid" : "",
      this.centered ? "ui-page--centered" : "",
      !this.padding ? "ui-page--no-padding" : "",
    ]
      .filter(Boolean)
      .join(" ");
  }

  @Input()
  size: PageSize = "lg";

  @Input({ transform: booleanAttribute })
  fluid = false;

  @Input({ transform: booleanAttribute })
  centered = true;

  @Input({ transform: booleanAttribute })
  padding = true;
}
