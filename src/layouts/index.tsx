import { Row, Col, Affix } from 'antd';
import { ReactNode } from 'react';

interface ComponentProps {
  header?: ReactNode;
  content?: ReactNode;
  footer?: ReactNode;
}

export const Layout_Desk_Component = ({
  header,
  content,
  footer,
}: ComponentProps) => {
  return (
    <>
      <Affix>{header}</Affix>
      {content}
      {footer}
    </>
  );
};

export const Layout_Table_Component = ({
  header,
  content,
  footer,
}: ComponentProps) => {
  return (
    <>
      <Affix>{header}</Affix>
      {content}
      {footer}
    </>
  );
};

export const Layout_Mobile_Component = ({
  header,
  content,
  footer,
}: ComponentProps) => {
  return (
    <>
      <Affix>{header}</Affix>
      {content}
      {footer}
    </>
  );
};
