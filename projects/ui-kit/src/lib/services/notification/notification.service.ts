import { Injectable, signal } from "@angular/core";
import { Notification, NotificationType } from "./notification.model";

const DEFAULT_DURATION = 5000;

@Injectable({
  providedIn: "root",
})
export class NotificationService {
  //------------------------------------------
  // State
  //------------------------------------------

  private readonly _notifications = signal<Notification[]>([]);

  readonly notifications = this._notifications.asReadonly();

  //------------------------------------------
  // Public API
  //------------------------------------------

  success(message: string, title?: string): void {
    this.show({
      type: "success",
      message,
      title,
    });
  }

  error(message: string, title?: string): void {
    this.show({
      type: "error",
      message,
      title,
    });
  }

  warning(message: string, title?: string): void {
    this.show({
      type: "warning",
      message,
      title,
    });
  }

  info(message: string, title?: string): void {
    this.show({
      type: "info",
      message,
      title,
    });
  }

  show(notification: Omit<Notification, "id">): void {
    const item: Notification = {
      id: crypto.randomUUID(),
      duration: DEFAULT_DURATION,
      closable: true,
      ...notification,
    };

    this._notifications.update((notifications) => [...notifications, item]);

    if (item.duration && item.duration > 0) {
      setTimeout(() => this.dismiss(item.id), item.duration);
    }
  }

  dismiss(id: string): void {
    this._notifications.update((notifications) =>
      notifications.filter((notification) => notification.id !== id),
    );
  }

  clear(): void {
    this._notifications.set([]);
  }
}
