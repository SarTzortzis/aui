import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

import { DataGridColumn } from "./data-grid.types";

@Component({
  selector: "aui-data-grid",
  standalone: true,
  templateUrl: "./data-grid.component.html",
  styleUrl: "./data-grid.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataGridComponent {
  readonly columns = input.required<DataGridColumn[]>();

  readonly data = input.required<Record<string, unknown>[]>();

  readonly pagination = input(false);

  readonly pageSize = input(10);

  protected readonly sortColumn = signal<string | null>(null);

  protected readonly sortDirection = signal<"asc" | "desc">("asc");

  protected readonly currentPage = signal(1);

  protected readonly hasData = computed(() => this.data().length > 0);

  protected readonly sortedRows = computed(() => {
    const column = this.sortColumn();

    if (!column) {
      return this.data();
    }

    const direction = this.sortDirection();

    return [...this.data()].sort((a, b) => {
      const first = a[column];
      const second = b[column];

      if (first == null) return 1;
      if (second == null) return -1;

      const result = String(first).localeCompare(String(second), undefined, {
        numeric: true,
        sensitivity: "base",
      });

      return direction === "asc" ? result : -result;
    });
  });

  protected readonly totalPages = computed(() => {
    if (!this.pagination()) {
      return 1;
    }

    return Math.max(1, Math.ceil(this.sortedRows().length / this.pageSize()));
  });

  protected readonly rows = computed(() => {
    const rows = this.sortedRows();

    if (!this.pagination()) {
      return rows;
    }

    const start = (this.currentPage() - 1) * this.pageSize();

    return rows.slice(start, start + this.pageSize());
  });

  protected sort(column: DataGridColumn): void {
    if (!column.sortable) {
      return;
    }

    if (this.sortColumn() === column.field) {
      this.sortDirection.update((direction) =>
        direction === "asc" ? "desc" : "asc",
      );
    } else {
      this.sortColumn.set(column.field);
      this.sortDirection.set("asc");
    }

    this.currentPage.set(1);
  }

  protected previousPage(): void {
    if (this.currentPage() > 1) {
      this.currentPage.update((page) => page - 1);
    }
  }

  protected nextPage(): void {
    if (this.currentPage() < this.totalPages()) {
      this.currentPage.update((page) => page + 1);
    }
  }

  protected getCellValue(
    row: Record<string, unknown>,
    column: DataGridColumn,
  ): unknown {
    const value = row[column.field];

    return column.formatter ? column.formatter(value, row) : value;
  }
}
