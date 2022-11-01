import { ComponentMeta, ComponentStory } from '@storybook/react';

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
  defaultSortType: 'desc',
  fillHeight: false,
  headerHeight: 50,
  height: 400,
  hover: true,
  isTree: false,
  loading: false,
  minHeight: 400,
  showHeader: true,
  sortCoulmn: 'desc',
  sortType: 'desc',
  virtualized: false,
  wordWrap: false,
};
