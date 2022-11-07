import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SIZE } from '../../types';
import { mockAvatar } from './__mocks__/mock';
import WAvatar from './WAvatar';

export default {
  component: WAvatar,
  title: 'Components/WAvatar',
} as ComponentMeta<typeof WAvatar>;

const Template: ComponentStory<typeof WAvatar> = (args) => (
  <WAvatar {...args} />
);

export const Default = Template.bind({});

Default.args = {
  avatars: mockAvatar,
  size: SIZE['MD'],
  spacing: 2,
  stack: false,
};
