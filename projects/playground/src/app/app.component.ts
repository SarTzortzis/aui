import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import {
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
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "playground";

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

  onLargeButtonClick() {
    console.log("Large button clicked!");
  }
}
