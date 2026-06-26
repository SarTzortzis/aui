import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from "@angular/core";

import { NgClass } from "@angular/common";
import { ButtonComponent } from "../../actions/button";
import { IconComponent } from "../../feedback/icon";

@Component({
  selector: "ui-dialog",
  standalone: true,
  imports: [NgClass, ButtonComponent, IconComponent],
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.scss"],
})
export class DialogComponent {
  @Input() open = false;

  @Input() closeOnBackdrop = true;

  @Input() closeOnEscape = true;

  @Output() openChange = new EventEmitter<boolean>();

  close(): void {
    this.open = false;

    this.openChange.emit(false);
  }

  onBackdropClick(): void {
    if (!this.closeOnBackdrop) {
      return;
    }

    this.close();
  }

  @HostListener("document:keydown.escape")
  onEscape(): void {
    if (!this.open || !this.closeOnEscape) {
      return;
    }

    this.close();
  }
}
