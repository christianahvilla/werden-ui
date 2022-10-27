import RMessage from 'rsuite/Message';

import type { IWMessage } from './types';

const WMessage = (props: IWMessage) => {
  if (!props) {
    return null;
  }

  return <RMessage {...props}>{props.text}</RMessage>;
};

export default WMessage;
