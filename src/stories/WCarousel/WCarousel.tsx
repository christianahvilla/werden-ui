import Carousel from 'rsuite/Carousel';

import { renderContent } from './helpers';
import { IWCarousel } from './types';

const WCarousel = (props: IWCarousel) => {
  if (!props) {
    return null;
  }

  return <Carousel {...props}>{renderContent(props.content)}</Carousel>;
};

export default WCarousel;
