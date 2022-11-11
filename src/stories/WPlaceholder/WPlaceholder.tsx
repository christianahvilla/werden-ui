import { Placeholder } from 'rsuite';

import { IWGraph, IWGrid, IWParagraph } from './types';

const WPlaceholder = (props: IWParagraph | IWGrid | IWGraph) => {
  if (!props) {
    return null;
  }

  if (Object.hasOwn(props, 'columns')) {
    return <Placeholder.Grid {...props} />;
  }

  if (Object.hasOwn(props, 'graph')) {
    return <Placeholder.Paragraph {...props} />;
  }

  return <Placeholder.Graph {...props} />;
};

export default WPlaceholder;
