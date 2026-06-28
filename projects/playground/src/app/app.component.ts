import { Component, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import {
  AlertComponent,
  BadgeComponent,
  ButtonComponent,
  CardComponent,
  CheckboxComponent,
  DataGridComponent,
  DialogComponent,
  DividerComponent,
  FormFieldComponent,
  IconComponent,
  InputComponent,
  LoadingOverlayComponent,
  LoadingService,
  NotificationService,
  RadioGroupComponent,
  SelectComponent,
  SpinnerComponent,
  SwitchComponent,
  TextareaComponent,
  ThemeService,
  ToastContainerComponent,
  column,
} from "ui-kit";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    ButtonComponent,
    InputComponent,
    TextareaComponent,
    CheckboxComponent,
    SwitchComponent,
    CardComponent,
    BadgeComponent,
    DividerComponent,
    SpinnerComponent,
    RadioGroupComponent,
    SelectComponent,
    IconComponent,
    AlertComponent,
    DialogComponent,
    FormFieldComponent,
    ToastContainerComponent,
    LoadingOverlayComponent,
    DataGridComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "playground";

  dialogOpen = false;

  private readonly loading = inject(LoadingService);

  constructor(
    public readonly theme: ThemeService,
    private readonly notification: NotificationService,
  ) {}

  get darkMode(): boolean {
    return this.theme.theme() === "dark";
  }

  readonly countries = [
    { label: "Greece", value: "gr" },
    { label: "Germany", value: "de" },
    { label: "France", value: "fr" },
  ];

  readonly statusOptions = [
    { label: "Draft", value: "draft" },
    { label: "Published", value: "published" },
    { label: "Archived", value: "archived" },
  ];

  readonly users = [
    {
      name: "John Doe",
      email: "john@test.com",
      role: "Administrator",
    },
    {
      name: "Jane Smith",
      email: "jane@test.com",
      role: "Manager",
    },
    {
      name: "Mike Johnson",
      email: "mike@test.com",
      role: "Developer",
    },
  ];

  readonly columns = [
    column("name", "Name"),

    column("email", "Email", {
      width: "320px",
    }),

    column("role", "Role"),
  ];

  onThemeChanged(isDark: boolean): void {
    this.theme.setTheme(isDark ? "dark" : "light");
  }

  showSuccessNotification(): void {
    this.notification.success("User created successfully.", "Success");
  }

  showErrorNotification(): void {
    this.notification.error("Something went wrong.", "Error");
  }

  showWarningNotification(): void {
    this.notification.warning("You have unsaved changes.", "Warning");
  }

  showInfoNotification(): void {
    this.notification.info("A new update is available.", "Information");
  }

  async simulateLoading(): Promise<void> {
    await this.loading.track(
      new Promise((resolve) => setTimeout(resolve, 3000)),
    );
  }

  onLargeButtonClick(): void {
    console.log("Large button clicked!");
  }
}
