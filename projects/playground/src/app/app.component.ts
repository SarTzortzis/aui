import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import {
  AlertComponent,
  BadgeComponent,
  ButtonComponent,
  CardComponent,
  CheckboxComponent,
  DialogComponent,
  DividerComponent,
  IconComponent,
  InputComponent,
  RadioGroupComponent,
  SelectComponent,
  SpinnerComponent,
  SwitchComponent,
  TextareaComponent,
  ThemeService,
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
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "playground";

  dialogOpen = false;

  constructor(public readonly theme: ThemeService) {}

  get darkMode(): boolean {
    return this.theme.theme() === "dark";
  }

  onThemeChanged(isDark: boolean): void {
    this.theme.setTheme(isDark ? "dark" : "light");
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
