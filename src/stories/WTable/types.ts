import { ReactNode } from 'react';

import { SORT_TYPE, WORD_WRAP } from './../../types';

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
    _nextData: object[],
    _scrollTo: (_coord: { x: number; y: number }) => void
  ) => void;
  onExpandChange?: (_expanded: boolean, _rowData: object) => void;
  onRowClick?: (_rowData: object) => void;
  onSortColumn?: (_dataKey: string, _sortType?: string) => void;
  renderEmpty?: (_info: ReactNode) => ReactNode;
  renderLoading: (_loading: ReactNode) => ReactNode;
  renderRow: (_children?: ReactNode, _rowData?: object) => ReactNode;
  renderRowExpanded?: (_rowDate?: object) => ReactNode;
  renderTreeToggle?: (
    _expandButton: ReactNode,
    _rowData?: Record<string, unknown>,
    _expanded?: boolean
  ) => ReactNode;
  rowHeight: (_rowData?: object) => number;
  showHeader?: boolean;
  sortCoulmn?: string;
  sortType?: SORT_TYPE;
  virtualized?: boolean;
  width?: number;
  wordWrap?: WORD_WRAP;
}
