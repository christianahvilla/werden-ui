import { ComponentMeta, ComponentStory } from '@storybook/react';

import WButton from './WButton';

export default {
  title: 'Components/WButton',
  component: WButton,
} as ComponentMeta<typeof WButton>;

const Template: ComponentStory<typeof WButton> = (args) => <WButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  active: true,
  appearance: 'primary',
  color: 'red',
  text: 'Botón'
}
