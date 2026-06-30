import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Input,
  inject,
} from "@angular/core";

@Component({
  selector: "ui-menu-item",
  standalone: true,
  templateUrl: "./menu-item.component.html",
  styleUrl: "./menu-item.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuItemComponent {
  private readonly elementRef = inject(ElementRef<HTMLElement>);

  @Input()
  disabled = false;

  @Input()
  danger = false;

  @HostBinding("attr.role")
  readonly role = "menuitem";

  @HostBinding("attr.tabindex")
  get tabIndex(): number {
    return this.disabled ? -1 : 0;
  }

  @HostBinding("class.ui-menu-item-disabled")
  get isDisabled(): boolean {
    return this.disabled;
  }

  @HostBinding("class.ui-menu-item-danger")
  get isDanger(): boolean {
    return this.danger;
  }

  focus(): void {
    this.elementRef.nativeElement.focus();
  }
}
