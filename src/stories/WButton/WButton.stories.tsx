import { ComponentMeta, ComponentStory } from '@storybook/react';

import { APPEARENCE, COLOR } from '../../types';
import WButton from './WButton';

export default {
  title: 'Components/WButton',
  component: WButton,
} as ComponentMeta<typeof WButton>;

const Template: ComponentStory<typeof WButton> = (args) => (
  <WButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  active: true,
  appearance: APPEARENCE['PRIMARY'],
  color: COLOR['RED'],
  text: 'Botón',
};
