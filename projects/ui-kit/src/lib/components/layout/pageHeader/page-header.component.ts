import { Component, Input } from "@angular/core";
import { HStackComponent } from "../hstack";
import { VStackComponent } from "../vstack";

@Component({
  selector: "ui-page-header",
  standalone: true,
  imports: [HStackComponent, VStackComponent],
  templateUrl: "./page-header.component.html",
  styleUrls: ["./page-header.component.scss"],
})
export class PageHeaderComponent {
  @Input({ required: true })
  title!: string;

  @Input()
  subtitle?: string;
}
