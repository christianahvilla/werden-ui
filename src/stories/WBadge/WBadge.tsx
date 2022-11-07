import { Badge } from 'rsuite';

import { IWBadge } from './types';

const WBadge = (props: IWBadge) => {
  if (!props) {
    return null;
  }

  return <Badge {...props}>{props.children}</Badge>;
};

export default WBadge;
