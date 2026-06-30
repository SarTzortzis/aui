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
  DropdownMenuComponent,
  DropdownMenuDirective,
  FormFieldComponent,
  HStackComponent,
  IconComponent,
  InputComponent,
  LoadingOverlayComponent,
  LoadingService,
  MenuItemComponent,
  NotificationService,
  PageComponent,
  PageHeaderComponent,
  PopoverComponent,
  PopoverDirective,
  RadioGroupComponent,
  SelectComponent,
  SidebarComponent,
  SpinnerComponent,
  StackComponent,
  SwitchComponent,
  TextareaComponent,
  ThemeService,
  ToastContainerComponent,
  TooltipComponent,
  TopbarComponent,
  VStackComponent,
} from "ui-kit";

import {
  COUNTRIES,
  STATUS_OPTIONS,
  USER_COLUMNS,
  USERS,
  USER_ACTIONS,
} from "./mock-data";

import { TooltipDirective } from "../../../ui-kit/src/lib/components/overlay/tooltip/tooltip.directive";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,

    // Actions
    ButtonComponent,

    // Forms
    InputComponent,
    TextareaComponent,
    CheckboxComponent,
    SwitchComponent,
    RadioGroupComponent,
    SelectComponent,
    FormFieldComponent,

    // Feedback
    AlertComponent,
    BadgeComponent,
    SpinnerComponent,
    ToastContainerComponent,
    LoadingOverlayComponent,

    // Display
    IconComponent,

    // Layout
    CardComponent,
    DividerComponent,
    StackComponent,
    VStackComponent,
    HStackComponent,
    PageComponent,
    PageHeaderComponent,
    SidebarComponent,
    TopbarComponent,

    // Data
    DataGridComponent,

    // Overlays
    TooltipComponent,
    TooltipDirective,

    PopoverComponent,
    PopoverDirective,

    DropdownMenuComponent,
    DropdownMenuDirective,
    MenuItemComponent,

    DialogComponent,
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
  readonly userActions = USER_ACTIONS;

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

  onRowAction(event: { action: string; row: Record<string, unknown> }): void {
    console.log(event.action, event.row);
  }
}
