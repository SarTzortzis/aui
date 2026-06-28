import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
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

  protected readonly hasData = computed(() => this.data().length > 0);

  protected getCellValue(
    row: Record<string, unknown>,
    column: DataGridColumn,
  ): unknown {
    return row[column.field];
  }
}
