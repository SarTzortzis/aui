import { ChartOptions } from "chart.js";

import { AuiChartTheme } from "../services/chart-theme.service";

export function createDefaultOptions(
  theme: AuiChartTheme,
): ChartOptions<"line"> {
  return {
    responsive: true,

    maintainAspectRatio: false,

    animation: {
      duration: 300,
    },

    plugins: {
      legend: {
        display: true,

        labels: {
          color: theme.colors.text,

          font: {
            family: theme.typography.fontFamily,

            size: theme.typography.fontSize,
          },
        },
      },

      tooltip: {
        enabled: true,
      },
    },

    scales: {
      x: {
        grid: {
          color: theme.colors.border,
        },

        ticks: {
          color: theme.colors.textSecondary,
        },
      },

      y: {
        grid: {
          color: theme.colors.border,
        },

        ticks: {
          color: theme.colors.textSecondary,
        },
      },
    },
  };
}
