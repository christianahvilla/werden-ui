import { APPEARENCE, COLOR, SIZE } from '../../types';

export interface IWButton {
  active: boolean;
  appearance: APPEARENCE;
  block?: boolean;
  color?: COLOR;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  size?: SIZE;
  text: string;
}
