import { SIZE } from './../../types';

export interface IWModal {
  autoFocus: boolean;
  backdrop: boolean | 'static';
  body?: JSX.Element;
  enforceFocus: boolean;
  footer?: JSX.Element;
  header?: JSX.Element;
  keyboard: boolean;
  onClose: () => void;
  onOpen: () => void;
  open: boolean;
  overflow: boolean;
  size: SIZE;
  title: string;
}
