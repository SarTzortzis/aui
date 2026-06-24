import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  ButtonComponent,
  InputComponent,
  TextareaComponent,
  CheckboxComponent,
  SwitchComponent,
  CardComponent,
  BadgeComponent,
  DividerComponent,
} from 'ui-kit';

@Component({
  selector: 'app-root',
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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'playground';

  onLargeButtonClick() {
    console.log('Large button clicked!');
  }
}
