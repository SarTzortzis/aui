import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Color, Size, Variant } from '../../models';

@Component({
  selector: 'ui-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() variant: Variant = 'contained';
  @Input() color: Color = 'primary';
  @Input() size: Size = 'medium';

  @Output() clicked = new EventEmitter<MouseEvent>();

  @Input() loading = false;
  @Input() fullWidth = false;
  @Input() disabled = false;

  get classes(): string[] {
    return [
      `variant-${this.variant}`,
      `color-${this.color}`,
      `size-${this.size}`,
      this.fullWidth ? 'full-width' : '',
    ].filter(Boolean);
  }
}
