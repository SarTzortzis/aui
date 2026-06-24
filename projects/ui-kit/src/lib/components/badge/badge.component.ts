import { Component, Input } from '@angular/core';

import { Color, Size } from '../../models/component.types';

@Component({
  selector: 'ui-badge',
  standalone: true,
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent {
  @Input() color: Color = 'primary';
  @Input() size: Size = 'medium';

  get classes(): string[] {
    return [`color-${this.color}`, `size-${this.size}`];
  }
}
