import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Input,
  QueryList,
  TemplateRef,
  ViewChildren,
} from "@angular/core";

import { NgIf, NgTemplateOutlet } from "@angular/common";

import { MenuItemComponent } from "./menu-item.component";

@Component({
  selector: "ui-menu",
  standalone: true,
  templateUrl: "./dropdown-menu.component.html",
  styleUrl: "./dropdown-menu.component.scss",
  imports: [NgIf, NgTemplateOutlet, MenuItemComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownMenuComponent implements AfterViewInit {
  @Input()
  content: TemplateRef<unknown> | null = null;

  @ViewChildren(MenuItemComponent)
  readonly items!: QueryList<MenuItemComponent>;

  private activeIndex = 0;

  ngAfterViewInit(): void {
    queueMicrotask(() => this.focusFirst());
  }

  @HostListener("keydown.arrowdown", ["$event"])
  onArrowDown(event: Event): void {
    (event as KeyboardEvent).preventDefault();

    this.move(1);
  }

  @HostListener("keydown.arrowup", ["$event"])
  onArrowUp(event: Event): void {
    (event as KeyboardEvent).preventDefault();

    this.move(-1);
  }

  @HostListener("keydown.home", ["$event"])
  onHome(event: Event): void {
    (event as KeyboardEvent).preventDefault();

    this.activeIndex = 0;

    this.focusCurrent();
  }

  @HostListener("keydown.end", ["$event"])
  onEnd(event: Event): void {
    (event as KeyboardEvent).preventDefault();

    this.activeIndex = this.enabledItems.length - 1;

    this.focusCurrent();
  }

  private get enabledItems(): MenuItemComponent[] {
    return this.items.filter((item) => !item.disabled);
  }

  private move(direction: number): void {
    const items = this.enabledItems;

    if (!items.length) {
      return;
    }

    this.activeIndex =
      (this.activeIndex + direction + items.length) % items.length;

    this.focusCurrent();
  }

  private focusCurrent(): void {
    this.enabledItems[this.activeIndex]?.focus();
  }

  private focusFirst(): void {
    this.activeIndex = 0;

    this.focusCurrent();
  }
}
