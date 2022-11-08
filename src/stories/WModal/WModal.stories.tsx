import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal } from 'rsuite';

import WButton from '../WButton/WButton';
import WModal from './WModal';

export default {
  title: 'Components/WModal',
  component: WModal,
} as ComponentMeta<typeof WModal>;

const Template: ComponentStory<typeof WModal> = (args) => <WModal {...args} />;

const header = (
  <Modal.Header closeButton={true}>
    <Modal.Title>Modal Title</Modal.Title>
  </Modal.Header>
);

const body = (
  <Modal.Body>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti facere
      nam accusantium, nobis sit nulla id similique labore velit ducimus
      voluptatem soluta necessitatibus placeat magnam. Accusantium optio
      reprehenderit corporis sint?
    </p>
  </Modal.Body>
);

const footer = (
  <Modal.Footer>
    <WButton active={true} appearance="primary" text="OK" color="green" />
    <WButton active={true} appearance="primary" text="Cancel" color="red" />
  </Modal.Footer>
);

export const Default = Template.bind({});
Default.args = {
  autoFocus: true,
  backdrop: true,
  body,
  enforceFocus: true,
  footer,
  header,
  keyboard: true,
  open: true,
  overflow: false,
  size: 'md',
  title: 'Modal',
};
