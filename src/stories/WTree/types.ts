import { SyntheticEvent } from 'react';
import type { ListProps } from 'rsuite';
import type { ItemDataType } from 'rsuite/esm/@types/common';

type VoidFunction = (_item: ItemDataType<string | number>) => void;

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
    _activeNode: ItemDataType<string | number>,
    _value: string | number,
    _event: SyntheticEvent<Element, Event>
  ) => void;
  virtualized?: boolean;
}
