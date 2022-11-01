import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ItemDataType } from 'rsuite/esm/@types/common';

import { data } from './__mocks__/mock';
import WTree from './WTree';

export default {
  component: WTree,
  title: 'Components/WTree',
} as ComponentMeta<typeof WTree>;

const Template: ComponentStory<typeof WTree> = (args) => <WTree {...args} />;

export const Default = Template.bind({});

const onSelect = (
  _activeNode: ItemDataType<string | number>,
  value: string | number
) => alert(value);

Default.args = {
  data: data as unknown as Array<ItemDataType>,
  defaultExpandAll: false,
  onSelect: onSelect,
};
