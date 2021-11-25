import React, { useState } from 'react';
import { LogoComponent } from './Logo';
import { SearchComponent } from './Search';
import { Affix, Col, Drawer, PageHeader, Row } from 'antd';
import { MenuOutlined, SearchOutlined } from '@ant-design/icons';
import { MenuComponent } from './Menu';

export const MobileNavBarComponent = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const renderDrawer = (
    <Drawer
      title="Basic Drawer"
      placement="left"
      closable={false}
      onClose={onClose}
      visible={visible}
      key="left"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );

  return (
    <>
      <div style={styles.container}>
        <div style={styles.sub}>
          <a style={styles.link1}>
            <LogoComponent />
          </a>
        </div>
        <div style={styles.sub}>
          <a style={styles.link2}>
            <SearchOutlined />
          </a>
          <a onClick={showDrawer} style={styles.link2}>
            <MenuOutlined />
          </a>
        </div>
      </div>
      {renderDrawer}
    </>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    background: 'white',
    paddingLeft: 12,
    paddingRight: 12,
  },
  sub: {
    display: 'inline-flex',
    alignItems: 'center',
  },
  link1: {
    display: 'inline-flex',
    color: 'inherit',
  },
  link2: {
    display: 'inline-flex',
    color: 'inherit',
    marginLeft: 14,
    fontWeight: 'bold',
    fontSize: 22,
    alignSelf: 'center',
  },
};
