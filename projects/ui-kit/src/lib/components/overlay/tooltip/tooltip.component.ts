import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "aui-tooltip",
  standalone: true,
  templateUrl: "./tooltip.component.html",
  styleUrls: ["./tooltip.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipComponent {
  @Input({ required: true })
  text = "";
}
