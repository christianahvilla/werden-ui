import { ComponentMeta, ComponentStory } from '@storybook/react';

import { COMPLETED_PLACEMENT, SHAPE } from '../../types';
import { mockCarousel } from '../WMessage/__mocks__/mock';
import WCarousel from './WCarousel';

export default {
  component: WCarousel,
  title: 'Components/WCarousel',
} as ComponentMeta<typeof WCarousel>;

const Template: ComponentStory<typeof WCarousel> = (args) => (
  <WCarousel {...args} />
);

export const Default = Template.bind({});

Default.args = {
  autoplay: true,
  autoplayInterval: 4000,
  content: mockCarousel,
  onSelect: (index: number) => alert(index),
  placement: COMPLETED_PLACEMENT['LEFT'],
  shape: SHAPE['DOT'],
};
