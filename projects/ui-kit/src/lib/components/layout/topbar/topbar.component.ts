import { Component, Input } from "@angular/core";

@Component({
  selector: "ui-topbar",
  standalone: true,
  templateUrl: "./topbar.component.html",
  styleUrls: ["./topbar.component.scss"],
})
export class TopbarComponent {
  @Input()
  height = "64px";
}
