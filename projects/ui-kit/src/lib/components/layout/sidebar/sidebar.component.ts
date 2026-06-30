import { Component, HostBinding, Input } from "@angular/core";

@Component({
  selector: "ui-sidebar",
  standalone: true,
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent {
  @Input()
  width = "280px";

  @HostBinding("style.width")
  get sidebarWidth(): string {
    return this.width;
  }
}
