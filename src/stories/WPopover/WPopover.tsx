import Popover from 'rsuite/Popover';

import { IWPopover } from './types';

const WPopover = (props: IWPopover) => {
  if (!props) {
    return null;
  }

  return <Popover {...props}>{props.chlidren}</Popover>;
};

export default WPopover;
