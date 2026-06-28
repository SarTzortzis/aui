import { ChangeDetectionStrategy, Component, inject } from "@angular/core";

import { SpinnerComponent } from "../spinner/spinner.component";
import { LoadingService } from "../../../services/loading";

@Component({
  selector: "aui-loading-overlay",
  standalone: true,
  imports: [SpinnerComponent],
  templateUrl: "./loading-overlay.component.html",
  styleUrl: "./loading-overlay.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingOverlayComponent {
  protected readonly loading = inject(LoadingService);
}
