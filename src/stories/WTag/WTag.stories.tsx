import { ComponentMeta, ComponentStory } from '@storybook/react';

import { mockTags } from './__mocks__/mock';
import WTag from './WTag';

export default {
  component: WTag,
  title: 'Components/WTag',
} as ComponentMeta<typeof WTag>;

const Template: ComponentStory<typeof WTag> = (args) => <WTag {...args} />;

export const Default = Template.bind({});

Default.args = {
  tags: mockTags,
};
