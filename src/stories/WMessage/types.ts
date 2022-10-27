import { TYPE } from '../../types';

export interface IWMessage {
  closable: boolean;
  duration: number;
  full: boolean;
  header: string;
  showIcon: boolean;
  text: string;
  type: TYPE;
}
