import { ChangeEvent, ReactNode } from 'react';

import { COMPLETED_PLACEMENT, SHAPE } from './../../types';

export interface IWCarousel {
  activeIndex?: number;
  autoplay?: boolean;
  autoplayInterval?: number;
  content: Array<ReactNode>;
  defaultActiveIndex?: number;
  onSelect?: (_index: number, _event?: ChangeEvent) => void;
  placement?: COMPLETED_PLACEMENT;
  shape?: SHAPE;
}
