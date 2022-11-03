import Message from 'rsuite/Message';

import type { IWMessage } from './types';

const WMessage = (props: IWMessage) => {
  if (!props) {
    return null;
  }

  return <Message {...props}>{props.text}</Message>;
};

export default WMessage;
