import Modal from 'rsuite/Modal';

import { IWModal } from './types';

const WModal = (props: IWModal) => {
  if (!props) {
    return null;
  }

  return (
    <Modal
      autoFocus={props.autoFocus}
      backdrop={props.backdrop}
      enforceFocus={props.enforceFocus}
      keyboard={props.keyboard}
      open={props.open}
      overflow={props.overflow}
      size={props.size}
      onOpen={props.onOpen}
      onClose={props.onClose}
    >
      {props.header}
      {props.body}
      {props.footer}
    </Modal>
  );
};

export default WModal;
