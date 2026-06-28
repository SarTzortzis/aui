import {
  ChangeDetectionStrategy,
  Component,
  input,
  inject,
} from "@angular/core";

import { Notification } from "../../../services/notification";
import { NotificationService } from "../../../services/notification";

@Component({
  selector: "aui-toast",
  standalone: true,
  templateUrl: "./toast.component.html",
  styleUrl: "./toast.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastComponent {
  readonly notification = input.required<Notification>();

  protected readonly notificationService = inject(NotificationService);

  dismiss(): void {
    this.notificationService.dismiss(this.notification().id);
  }
}
