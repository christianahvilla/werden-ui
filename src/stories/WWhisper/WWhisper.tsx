import { Whisper } from 'rsuite';

import { IWWhisper } from './types';

const WWhisper = (props: IWWhisper) => {
  if (!props) {
    return null;
  }

  return <Whisper {...props}>{props.content}</Whisper>;
};

export default WWhisper;
