import { Button as RButton } from 'rsuite';

export interface IButton {
  active: boolean;
  appearance: 'default' | 'primary' | 'link' | 'subtle' | 'ghost';
  block?: boolean;
  color?: 'red' | 'orange' | 'yellow' | 'green' | 'cyan' | 'blue' | 'violet';
  disabled?: boolean;
  loading?: boolean;
  size?: 'lg' | 'md' | 'sm' | 'xs';
  text: string;
  onClick?: () => void;
}

export const Button = (props: IButton) => {
  return (
    <RButton {...props}>{props.text}</RButton>
  );
};
