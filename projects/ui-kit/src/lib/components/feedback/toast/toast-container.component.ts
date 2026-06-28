import { ChangeDetectionStrategy, Component, inject } from "@angular/core";

import { NotificationService } from "../../../services/notification";
import { ToastComponent } from "./toast.component";

@Component({
  selector: "aui-toast-container",
  standalone: true,
  templateUrl: "./toast-container.component.html",
  styleUrl: "./toast-container.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ToastComponent],
})
export class ToastContainerComponent {
  protected readonly notificationService = inject(NotificationService);

  protected readonly notifications = this.notificationService.notifications;
}
