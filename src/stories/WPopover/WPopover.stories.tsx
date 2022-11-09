import { ComponentMeta, ComponentStory } from '@storybook/react';

import WPopover from './WPopover';

export default {
  title: 'Components/WPopover',
  component: WPopover,
} as ComponentMeta<typeof WPopover>;

const Template: ComponentStory<typeof WPopover> = (args) => (
  <WPopover {...args} />
);

const content = (
  <>
    <p>This is a defalut Popover </p>
    <p>Content</p>
  </>
);

export const Default = Template.bind({});
Default.args = {
  arrow: false,
  chlidren: content,
  title: 'Title',
  visible: false,
};
