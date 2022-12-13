import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TYPE } from '../../types';
import WPlaceholder from '../WPlaceholder/WPlaceholder';
import WNotification from './WNotification';

export default {
  title: 'components/WNotification',
  component: WNotification,
} as ComponentMeta<typeof WNotification>;

const Template: ComponentStory<typeof WNotification> = (args) => (
  <WNotification {...args} />
);

export const Default = Template.bind({});

Default.args = {
  children: <WPlaceholder active={true} graph={false} rows={8} />,
  closable: true,
  duration: 4500,
  header: 'Notification Title',
  type: TYPE.INFO,
};
