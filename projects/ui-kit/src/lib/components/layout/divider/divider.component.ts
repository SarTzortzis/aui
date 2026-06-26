import { Component, Input } from '@angular/core';

import { DividerOrientation } from './divider.types';

@Component({
  selector: 'ui-divider',
  standalone: true,
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss'],
})
export class DividerComponent {
  @Input() orientation: DividerOrientation = 'horizontal';

  get classes(): string[] {
    return [`orientation-${this.orientation}`];
  }
}
