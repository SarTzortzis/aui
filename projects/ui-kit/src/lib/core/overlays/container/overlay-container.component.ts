import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  inject,
} from "@angular/core";

import { OverlayService } from "../services/overlay.service";

@Component({
  selector: "aui-overlay-container",
  standalone: true,
  templateUrl: "./overlay-container.component.html",
  styleUrls: ["./overlay-container.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverlayContainerComponent implements AfterViewInit, OnDestroy {
  private readonly overlayService = inject(OverlayService);

  @ViewChild("container", { static: true })
  private readonly container!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    this.overlayService.setHostElement(this.container.nativeElement);
  }

  ngOnDestroy(): void {
    this.overlayService.setHostElement(document.body);
  }
}
