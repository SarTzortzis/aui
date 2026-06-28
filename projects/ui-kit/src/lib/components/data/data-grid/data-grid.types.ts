export interface DataGridColumn {
  field: string;

  header: string;

  sortable?: boolean;

  hidden?: boolean;

  width?: string;
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
