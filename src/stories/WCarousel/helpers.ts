import { ReactNode } from 'react';

export const renderContent = (content: Array<ReactNode>) =>
  content.map((item) => item);
