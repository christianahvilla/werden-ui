import { TagGroup } from 'rsuite';

import { renderTags } from './helpers';
import { IWTag } from './types';

const WTag = (props: IWTag) => {
  if (!props) {
    return null;
  }

  return <TagGroup>{renderTags(props.tags)}</TagGroup>;
};

export default WTag;
