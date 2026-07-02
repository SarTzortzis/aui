export interface AuiChartDataset {
  /**
   * Dataset label shown in the legend.
   */
  label: string;

  /**
   * Numeric values.
   */
  data: number[];

  /**
   * Optional color.
   *
   * If omitted, AUI will automatically assign one
   * from the active theme.
   */
  color?: string;
}
