import { SyntheticEvent } from 'react';
import type { ListProps } from 'rsuite';
import type { ItemDataType } from 'rsuite/esm/@types/common';

type VoidFunction = (item: ItemDataType<string | number>) => void;

export interface IWTree {
  data: Array<ItemDataType>;
  defaultExpandAll: boolean;
  defaultExpandItemValues?: Array<string>;
  defaultValue?: string;
  disabledItemValues?: Array<string>;
  draggable?: boolean;
  expandItemValues?: Array<string>;
  height?: number;
  labelKey?: string;
  listProps?: ListProps;
  onChange?: VoidFunction;
  onDragEnd?: VoidFunction;
  onDragEnter?: VoidFunction;
  onDragLeave?: VoidFunction;
  onDragOver?: VoidFunction;
  onDragStart?: VoidFunction;
  onDrop?: VoidFunction;
  onSelect?: (
    activeNode: ItemDataType<string | number>,
    value: string | number,
    event: SyntheticEvent<Element, Event>
  ) => void;
  virtualized?: boolean;
}
