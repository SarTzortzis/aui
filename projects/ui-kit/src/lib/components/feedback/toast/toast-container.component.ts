import { ChangeDetectionStrategy, Component, inject } from "@angular/core";

import { NotificationService } from "../../../services/notification";

@Component({
  selector: "aui-toast-container",
  standalone: true,
  templateUrl: "./toast-container.component.html",
  styleUrl: "./toast-container.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastContainerComponent {
  protected readonly notificationService = inject(NotificationService);

  protected readonly notifications = this.notificationService.notifications;
}
