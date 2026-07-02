import { Directive, OnChanges, OnDestroy, SimpleChanges } from "@angular/core";

@Directive()
export abstract class BaseChart implements OnChanges, OnDestroy {
  ngOnChanges(changes: SimpleChanges): void {
    if (this.shouldCreateChart(changes)) {
      this.createChart();
      return;
    }

    this.updateChart();
  }

  ngOnDestroy(): void {
    this.destroyChart();
  }

  protected shouldCreateChart(changes: SimpleChanges): boolean {
    return !!changes["data"] && changes["data"].firstChange;
  }

  protected abstract createChart(): void;

  protected abstract updateChart(): void;

  protected abstract destroyChart(): void;
}
