import type { RowData } from '@tanstack/react-table';
import '@tanstack/react-table'

declare module '@tanstack/react-table' {
  interface ColumnMeta<TData extends RowData, TValue> {
    align?: 'right';
  }
}