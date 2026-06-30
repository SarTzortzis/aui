import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { OverlayPositionName } from "../../../core/overlays/models/overlay-position";

@Component({
  selector: "ui-tooltip",
  standalone: true,
  templateUrl: "./tooltip.component.html",
  styleUrls: ["./tooltip.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipComponent {
  @Input({ required: true })
  text = "";
  @Input()
  placement: OverlayPositionName = "top";
}
