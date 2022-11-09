import Avatar from 'rsuite/Avatar';

import { IWAvatar } from './types';

export const displayAvatar = (avatars: Array<IWAvatar>) =>
  avatars.map(({ alt, children, circle, id, size, src, srcSet }) => (
    <Avatar
      key={id}
      circle={circle}
      size={size}
      src={src}
      srcSet={srcSet}
      alt={alt}
    >
      {children}
    </Avatar>
  ));
