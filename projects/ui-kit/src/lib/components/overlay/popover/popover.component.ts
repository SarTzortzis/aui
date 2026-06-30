import {
  ChangeDetectionStrategy,
  Component,
  Input,
  TemplateRef,
} from "@angular/core";
import { NgIf, NgTemplateOutlet } from "@angular/common";

@Component({
  selector: "aui-popover",
  standalone: true,
  templateUrl: "./popover.component.html",
  styleUrl: "./popover.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf, NgTemplateOutlet],
})
export class PopoverComponent {
  @Input()
  content?: TemplateRef<unknown>;
}
