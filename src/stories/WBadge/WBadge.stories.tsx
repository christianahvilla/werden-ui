import { ComponentMeta, ComponentStory } from '@storybook/react';

import { COLOR } from '../../types';
import WBadge from './WBadge';

export default {
  title: 'Components/WBadge',
  component: WBadge,
} as ComponentMeta<typeof WBadge>;

const Template: ComponentStory<typeof WBadge> = (args) => <WBadge {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'New Badge',
  color: COLOR['BLUE'],
  content: 'New',
  maxCount: 99,
};
