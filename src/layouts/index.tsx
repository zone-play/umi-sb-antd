import { Row, Col, Affix } from 'antd';
import { ReactNode } from 'react';
import { MediaContextProvider } from '../media';

interface ComponentProps {
  header?: ReactNode;
  content?: ReactNode;
  footer?: ReactNode;
}

export const LayoutComponent = ({
  header,
  content,
  footer,
}: ComponentProps) => {
  return (
    <MediaContextProvider>
      {header}
      {content}
      {footer}
    </MediaContextProvider>
  );
};
