import { ReactNode } from 'react';

import { SORT_TYPE, WORD_WRAP } from '../../types';

type TableLocaleType = {
  emptyMessage?: string;
  loading?: string;
};

export interface IHeader {
  content?: ReactNode | string;
  dataKey: string;
  sortable: boolean;
  text: string;
  width: number;
}

export interface IWTable {
  affixHeader?: boolean | number;
  affixHorizontalScrollbar?: boolean | number;
  autoHeight?: boolean;
  bordered?: boolean;
  cellBordered?: boolean;
  columns: Array<IHeader>;
  data: Array<object>;
  defaultExpandAllRows?: boolean;
  defaultExpandedRowKeys?: Array<string>;
  defaultSortType?: SORT_TYPE;
  expandedRowKeys?: Array<string>;
  fillHeight?: boolean;
  headerHeight?: number;
  height: number;
  hover?: boolean;
  isTree?: boolean;
  loading: boolean;
  locale?: TableLocaleType;
  minHeight?: number;
  onDataUpdate?: (
    nextData: object[],
    scrollTo: (coord: { x: number; y: number }) => void
  ) => void;
  onExpandChange?: (expanded: boolean, rowData: object) => void;
  onRowClick?: (rowData: object) => void;
  onSortColumn?: (dataKey: string, sortType?: string) => void;
  renderEmpty?: (info: ReactNode) => ReactNode;
  renderLoading: (loading: ReactNode) => ReactNode;
  renderRow: (children?: ReactNode, rowData?: object) => ReactNode;
  renderRowExpanded?: (rowDate?: object) => ReactNode;
  renderTreeToggle?: (
    expandButton: ReactNode,
    rowData?: Record<string, unknown>,
    expanded?: boolean
  ) => ReactNode;
  rowHeight: (rowData?: object) => number;
  showHeader?: boolean;
  sortCoulmn?: string;
  sortType?: SORT_TYPE;
  virtualized?: boolean;
  width?: number;
  wordWrap?: WORD_WRAP | boolean;
}
