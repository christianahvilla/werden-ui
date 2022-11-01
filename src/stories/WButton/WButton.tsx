import Button from 'rsuite/Button';

import { IWButton } from './types';

const WButton = (props: IWButton) => {
  if (!props) {
    return null;
  }

  return <Button {...props}>{props.text}</Button>;
};

export default WButton;
