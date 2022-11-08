import { MouseEvent, ReactNode } from 'react';

import { COLOR, SIZE } from '../../types';

export type TagType = {
  closable: boolean;
  color: COLOR;
  content: string | ReactNode;
  id: string | number;
  // eslint-disable-next-line no-unused-vars
  onClose: (event: MouseEvent) => void;
  size: SIZE;
};

export interface IWTag {
  tags: Array<TagType>;
}
