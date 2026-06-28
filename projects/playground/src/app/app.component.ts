import { Component, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import {
  AlertComponent,
  BadgeComponent,
  ButtonComponent,
  CardComponent,
  CheckboxComponent,
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
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "playground";
  private readonly loading = inject(LoadingService);

  dialogOpen = false;

  constructor(
    public readonly theme: ThemeService,
    private readonly notification: NotificationService,
  ) {}

  get darkMode(): boolean {
    return this.theme.theme() === "dark";
  }

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

  countries = [
    { label: "Greece", value: "gr" },
    { label: "Germany", value: "de" },
    { label: "France", value: "fr" },
  ];

  statusOptions = [
    { label: "Draft", value: "draft" },
    { label: "Published", value: "published" },
    { label: "Archived", value: "archived" },
  ];

  onLargeButtonClick(): void {
    console.log("Large button clicked!");
  }
}
