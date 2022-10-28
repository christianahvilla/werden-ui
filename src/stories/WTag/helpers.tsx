import Tag from 'rsuite/Tag';

import { TagType } from './types';

export const renderTags = (tags: Array<TagType>) =>
  tags.map(({ id, closable, color, content, onClose }: TagType) => (
    <Tag key={id} closable={closable} color={color} onClose={onClose}>
      {content}
    </Tag>
  ));
