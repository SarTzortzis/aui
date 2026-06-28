export interface DataGridAction {
  icon?: string;

  label: string;

  color?: "primary" | "success" | "warning" | "danger";

  action: string;
}

export interface DataGridColumn {
  field: string;

  header: string;

  sortable?: boolean;

  hidden?: boolean;

  width?: string;

  formatter?: (value: unknown, row: Record<string, unknown>) => unknown;
}

export function column(
  field: string,
  header: string,
  options: Omit<DataGridColumn, "field" | "header"> = {},
): DataGridColumn {
  return {
    field,
    header,
    ...options,
  };
}
