import React from 'react';
import { Layout, Affix } from 'antd';
const { Header, Footer, Content } = Layout;

function LayoutComponent() {
  return (
    <Layout>
      <Affix>
        <Header>Header</Header>
      </Affix>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default LayoutComponent;
