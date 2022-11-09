import { ReactNode } from 'react';

import { COLOR } from '../../types';

export interface IWBadge {
  children: ReactNode;
  color: COLOR;
  content: ReactNode | boolean;
  maxCount: number;
}
