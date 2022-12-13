import { TYPE } from '../../types';

export interface IWNotification {
  children: JSX.Element;
  closable: boolean;
  duration: number;
  header: string;
  onClose?: () => void;
  type: TYPE;
}
