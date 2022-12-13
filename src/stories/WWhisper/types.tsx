import type { ReactElement } from 'react';

import { ALL_PLACEMENT, TRIGGER } from '../../types';

export interface IWWhisper {
  content: JSX.Element;
  controlId?: string;
  delay?: number;
  delayClose?: number;
  delayOpen?: number;
  enterable?: boolean;
  followCursor?: boolean;
  full?: boolean;
  placement?: ALL_PLACEMENT;
  preventOverflow?: boolean;
  speaker: ReactElement;
  trigger: TRIGGER;
}
