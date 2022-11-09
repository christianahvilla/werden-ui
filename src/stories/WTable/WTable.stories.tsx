import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SORT_TYPE } from '../../types';
import { mockHeader, mockTable } from './__mocks__/mock';
import WTable from './WTable';

export default {
  component: WTable,
  title: 'Components/WTable',
} as ComponentMeta<typeof WTable>;

const Template: ComponentStory<typeof WTable> = (args) => <WTable {...args} />;

export const Default = Template.bind({});

Default.args = {
  affixHeader: true,
  affixHorizontalScrollbar: true,
  autoHeight: true,
  bordered: true,
  cellBordered: false,
  columns: mockHeader,
  data: mockTable['results'],
  defaultExpandAllRows: false,
  defaultSortType: SORT_TYPE['ASC'],
  fillHeight: false,
  headerHeight: 50,
  height: 400,
  hover: true,
  isTree: false,
  loading: false,
  minHeight: 400,
  showHeader: true,
  sortCoulmn: SORT_TYPE['ASC'],
  sortType: SORT_TYPE['ASC'],
  virtualized: false,
  wordWrap: false,
};
