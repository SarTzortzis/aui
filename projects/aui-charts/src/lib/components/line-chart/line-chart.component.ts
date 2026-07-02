import { Component, ElementRef, ViewChild, inject, input } from "@angular/core";

import { Chart } from "chart.js/auto";

import { BaseChart } from "../../core/base-chart";
import { AuiChartData } from "../../models/chart-data";
import { AuiChartOptions } from "../../models/chart-options";
import { ChartThemeService } from "../../services/chart-theme.service";
import { createDefaultOptions } from "../../core/chart-default-options";

@Component({
  selector: "aui-line-chart",
  standalone: true,
  templateUrl: "./line-chart.component.html",
  styleUrl: "./line-chart.component.scss",
})
export class LineChartComponent extends BaseChart {
  readonly data = input.required<AuiChartData>();

  readonly options = input<AuiChartOptions>({});

  @ViewChild("canvas", { static: true })
  protected readonly canvas!: ElementRef<HTMLCanvasElement>;

  protected readonly chartTheme = inject(ChartThemeService);

  protected chart?: Chart;

  protected createChart(): void {
    const theme = this.chartTheme.theme();

    this.chart = new Chart(this.canvas.nativeElement, {
      type: "line",

      data: {
        labels: this.data().labels,

        datasets: this.data().datasets.map((dataset) => ({
          label: dataset.label,

          data: dataset.data,

          borderColor: dataset.color ?? theme.colors.primary,

          backgroundColor: dataset.color ?? theme.colors.primary,

          tension: 0.35,

          fill: false,
        })),
      },

      options: createDefaultOptions(theme),
    });
  }

  protected updateChart(): void {
    if (!this.chart) {
      return;
    }

    this.chart.data.labels = this.data().labels;

    this.chart.data.datasets = this.data().datasets.map((dataset) => ({
      label: dataset.label,

      data: dataset.data,

      borderColor: dataset.color,

      backgroundColor: dataset.color,

      tension: 0.35,

      fill: false,
    }));

    this.chart.update();
  }

  protected destroyChart(): void {
    this.chart?.destroy();
    this.chart = undefined;
  }
}
