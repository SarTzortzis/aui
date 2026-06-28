import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
  signal,
  effect,
} from "@angular/core";

import { DataGridColumn } from "./data-grid.types";
import { InputComponent } from "../../forms/input";
import { SelectComponent } from "../../forms/select";
import { SpinnerComponent } from "../../feedback/spinner";

@Component({
  selector: "aui-data-grid",
  standalone: true,
  templateUrl: "./data-grid.component.html",
  styleUrl: "./data-grid.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [InputComponent, SpinnerComponent, SelectComponent],
})
export class DataGridComponent {
  readonly filterPlaceholder = input("Search...");
  readonly loading = input(false);
  readonly rowClick = output<Record<string, unknown>>();

  readonly rowDoubleClick = output<Record<string, unknown>>();

  readonly columns = input.required<DataGridColumn[]>();

  readonly data = input.required<Record<string, unknown>[]>();

  readonly pagination = input(false);

  readonly defaultPageSize = input(10);

  readonly pageSize = input(10);

  readonly pageSizeOptions = input([10, 25, 50, 100]);

  readonly selectable = input(false);

  readonly filterable = input(false);

  readonly rowId = input("id");

  protected readonly filter = signal("");

  protected readonly sortColumn = signal<string | null>(null);

  protected readonly sortDirection = signal<"asc" | "desc">("asc");

  protected readonly currentPage = signal(1);

  protected readonly selectedRows = signal<Set<unknown>>(new Set());

  protected readonly selectedCount = computed(() => this.selectedRows().size);

  protected readonly hasData = computed(() => this.data().length > 0);

  protected pageSizeValue = signal(this.pageSize());

  protected setPageSize(value: string | number): void {
    this.pageSizeValue.set(Number(value));
    this.currentPage.set(1);
  }
  protected readonly hasResults = computed(
    () => this.filteredRows().length > 0,
  );
  protected onRowClick(row: Record<string, unknown>): void {
    this.rowClick.emit(row);
  }

  protected onRowDoubleClick(row: Record<string, unknown>): void {
    this.rowDoubleClick.emit(row);
  }

  protected readonly filteredRows = computed(() => {
    const search = this.filter().trim().toLowerCase();

    if (!search) {
      return this.data();
    }

    return this.data().filter((row) =>
      this.columns()
        .filter((column) => !column.hidden)
        .some((column) => {
          const value = this.getCellValue(row, column);

          return String(value ?? "")
            .toLowerCase()
            .includes(search);
        }),
    );
  });

  protected readonly sortedRows = computed(() => {
    const column = this.sortColumn();

    if (!column) {
      return this.filteredRows();
    }

    const direction = this.sortDirection();

    return [...this.filteredRows()].sort((a, b) => {
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

    return Math.max(
      1,
      Math.ceil(this.sortedRows().length / this.pageSizeValue()),
    );
  });

  protected readonly rows = computed(() => {
    const rows = this.sortedRows();

    if (!this.pagination()) {
      return rows;
    }

    const start = (this.currentPage() - 1) * this.pageSizeValue();

    return rows.slice(start, start + this.pageSizeValue());
  });

  protected readonly allRowsSelected = computed(() => {
    const rows = this.rows();

    return rows.length > 0 && rows.every((row) => this.isSelected(row));
  });

  protected readonly someRowsSelected = computed(() => {
    const rows = this.rows();

    const selected = rows.filter((row) => this.isSelected(row)).length;

    return selected > 0 && selected < rows.length;
  });

  protected setFilter(value: string): void {
    this.filter.set(value);
    this.currentPage.set(1);
  }

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

  protected toggleRow(row: Record<string, unknown>): void {
    const id = row[this.rowId()];

    this.selectedRows.update((current) => {
      const next = new Set(current);

      next.has(id) ? next.delete(id) : next.add(id);

      return next;
    });
  }

  protected toggleAll(): void {
    const rows = this.rows();

    this.selectedRows.update((current) => {
      const next = new Set(current);

      if (this.allRowsSelected()) {
        rows.forEach((row) => next.delete(row[this.rowId()]));
      } else {
        rows.forEach((row) => next.add(row[this.rowId()]));
      }

      return next;
    });
  }

  protected isSelected(row: Record<string, unknown>): boolean {
    return this.selectedRows().has(row[this.rowId()]);
  }

  protected getCellValue(
    row: Record<string, unknown>,
    column: DataGridColumn,
  ): unknown {
    const value = row[column.field];

    return column.formatter ? column.formatter(value, row) : value;
  }
}
