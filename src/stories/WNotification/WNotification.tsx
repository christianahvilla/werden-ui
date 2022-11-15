import { Notification } from 'rsuite';

import { IWNotification } from './types';

const WNotification = (props: IWNotification) => {
  if (!props) {
    return null;
  }

  const { closable, duration, header, onClose, type } = props;

  return (
    <Notification
      closable={closable}
      duration={duration}
      header={header}
      onClose={onClose}
      type={type}
    >
      {props.children}
    </Notification>
  );
};

export default WNotification;
