import Tree from 'rsuite/Tree';

import { IWTree } from './types';

const WTree = (props: IWTree) => {
  if (!props) {
    return null;
  }

  return <Tree {...props} />;
};

export default WTree;
