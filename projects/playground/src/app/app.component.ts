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
import { COUNTRIES, STATUS_OPTIONS, USER_COLUMNS, USERS } from "./mock-data";

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
  tableLoading = true;

  private readonly loading = inject(LoadingService);

  constructor(
    public readonly theme: ThemeService,
    private readonly notification: NotificationService,
  ) {}

  get darkMode(): boolean {
    return this.theme.theme() === "dark";
  }

  readonly countries = COUNTRIES;

  readonly statusOptions = STATUS_OPTIONS;

  readonly users = USERS;

  readonly columns = USER_COLUMNS;

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
  onRowClick(row: Record<string, unknown>): void {
    console.log("Row Click:", row);
  }

  onRowDoubleClick(row: Record<string, unknown>): void {
    console.log("Row Double Click:", row);
  }

  onLargeButtonClick(): void {
    console.log("Large button clicked!");
  }
}
