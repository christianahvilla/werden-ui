import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button, Popover } from 'rsuite';

import { ALL_PLACEMENT, TRIGGER } from '../../types';
import WWhisper from './WWhisper';

export default {
  title: 'Components/WWhisper',
  component: WWhisper,
} as ComponentMeta<typeof WWhisper>;

const Template: ComponentStory<typeof WWhisper> = (args) => (
  <WWhisper {...args} />
);

const speaker = <Popover>This is a Popover that follow cursor</Popover>;

const content = <Button>Hover me</Button>;

export const Default = Template.bind({});
Default.args = {
  content: content,
  controlId: 'id',
  delay: 100,
  delayClose: 100,
  delayOpen: 100,
  enterable: true,
  followCursor: false,
  full: false,
  placement: ALL_PLACEMENT['AUTO'],
  preventOverflow: false,
  speaker: speaker,
  trigger: TRIGGER['HOVER'],
};
