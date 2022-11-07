import { ReactNode } from 'react';

import { SIZE } from '../../types';

export interface IWAvatar {
  alt?: string;
  children?: ReactNode;
  circle?: boolean;
  id: number;
  size?: SIZE;
  src?: string;
  srcSet?: string;
}

export interface IWAvatarGroup {
  avatars: Array<IWAvatar>;
  size?: SIZE;
  spacing?: number;
  stack?: boolean;
}
