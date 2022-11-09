import Table from 'rsuite/Table';

import { IHeader } from './types';

const { Column, HeaderCell, Cell } = Table;

export const renderHeaderTable = (columns: Array<IHeader>) =>
  columns.map(({ width, content, dataKey, text, sortable }: IHeader) => (
    <Column width={width} key={dataKey} sortable={sortable}>
      <HeaderCell>{text}</HeaderCell>
      <Cell dataKey={dataKey}>{content}</Cell>
    </Column>
  ));
