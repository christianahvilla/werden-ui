import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TYPE } from '../../types';
import WMessage from './WMessage';

export default {
  component: WMessage,
  title: 'Components/WMessage',
} as ComponentMeta<typeof WMessage>;

const Template: ComponentStory<typeof WMessage> = (args) => (
  <WMessage {...args} />
);

export const Default = Template.bind({});

Default.args = {
  type: TYPE['ERROR'],
  showIcon: true,
  header: 'Success',
  text: 'This is an success message about copywriting.',
  closable: true,
  duration: 2000,
  full: false,
};
