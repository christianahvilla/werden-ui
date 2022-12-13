import { ComponentMeta, ComponentStory } from '@storybook/react';

import { IWGrid } from './types';
import WPlaceholder from './WPlaceholder';

export default {
  title: 'Components/WPlaceholder',
  component: WPlaceholder,
} as ComponentMeta<typeof WPlaceholder>;

const Template: ComponentStory<typeof WPlaceholder> = (args) => (
  <WPlaceholder {...args} />
);

export const Paragraph = Template.bind({});
Paragraph.args = {
  active: true,
  graph: 'circle',
  rowHeight: 10,
  rowMargin: 15,
  rows: 8,
};

export const Grid = Template.bind({});
Grid.args = {
  active: true,
  columns: 4,
  rowHeight: 5,
  rowMargin: 8,
  rows: 5,
} as IWGrid;

export const Graph = Template.bind({});
Graph.args = {
  active: true,
  height: 20,
  width: 20,
};
