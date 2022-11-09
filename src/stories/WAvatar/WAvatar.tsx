import AvatarGroup from 'rsuite/AvatarGroup';

import { displayAvatar } from './helper';
import { IWAvatarGroup } from './types';

const WAvatar = (props: IWAvatarGroup) => {
  if (!props) {
    return null;
  }

  const { avatars, size, spacing, stack } = props;

  return (
    <AvatarGroup size={size} spacing={spacing} stack={stack}>
      {displayAvatar(avatars)}
    </AvatarGroup>
  );
};

export default WAvatar;
