/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { MouseEvent } from 'react';

import { TagType } from '../types';

export const mockTags: Array<TagType> = [
  {
    color: 'blue',
    closable: true,
    id: 1,
    size: 'md',
    content: 'Tag 1',
    onClose: (event: MouseEvent) => alert(`Removed item ${event}`),
  },
  {
    color: 'green',
    closable: true,
    id: 2,
    size: 'md',
    content: 'Tag 2',
    onClose: (event: MouseEvent) => alert(`Removed item ${event}`),
  },
  {
    color: 'orange',
    closable: true,
    id: 3,
    size: 'md',
    content: 'Tag 3',
    onClose: (event: MouseEvent) => alert(`Removed item ${event}`),
  },
  {
    color: 'red',
    closable: true,
    id: 4,
    size: 'md',
    content: 'Tag 4',
    onClose: (event: MouseEvent) => alert(`Removed item ${event}`),
  },
];
