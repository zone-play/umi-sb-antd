import { Row, Col, Affix } from 'antd';
import { ReactNode } from 'react';

interface ComponentProps {
  header?: ReactNode;
  content?: ReactNode;
  footer?: ReactNode;
}

const DefaultLayout = ({ header, content, footer }: ComponentProps) => {
  return (
    <>
      {header}
      {content}
      {footer}
    </>
  );
};

export const Layout_Desk_Component = DefaultLayout.bind({});
export const Layout_Table_Component = DefaultLayout.bind({});
export const Layout_Mobile_Component = DefaultLayout.bind({});
