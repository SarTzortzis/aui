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

  darkMode = false;

  dialogOpen = false;

  countries = [
    {
      label: "Greece",
      value: "gr",
    },
    {
      label: "Germany",
      value: "de",
    },
    {
      label: "France",
      value: "fr",
    },
  ];

  statusOptions = [
    {
      label: "Draft",
      value: "draft",
    },
    {
      label: "Published",
      value: "published",
    },
    {
      label: "Archived",
      value: "archived",
    },
  ];

  toggleTheme(): void {
    this.darkMode = !this.darkMode;
  }

  onThemeChanged(isDark: boolean): void {
    this.darkMode = isDark;
  }

  onLargeButtonClick(): void {
    console.log("Large button clicked!");
  }
}
