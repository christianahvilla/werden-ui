export interface IWParagraph {
  active: boolean;
  graph: boolean | 'circle' | 'square' | 'image';
  rowHeight?: number;
  rowMargin?: number;
  rows?: number;
}

export interface IWGrid {
  active: boolean;
  columns: number;
  rowHeight: number;
  rowMargin: number;
  rows: number;
}

export interface IWGraph {
  active: boolean;
  height?: number;
  width?: number;
}
