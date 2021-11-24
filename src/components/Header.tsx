import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { MenuComponent } from './Menu';
import { MenuSubComponent } from './MenuSub';
import { LogoComponent } from './Logo';
import { CloseOutlined, MenuOutlined, SearchOutlined } from '@ant-design/icons';
import { SearchComponent } from './Search';

export const HeaderComponent = () => {
  const [visibleM, setVisibleM] = useState(false);
  const [visibleS, setVisibleS] = useState(false);

  function menuHandler() {
    setVisibleM(visibleM ? false : true);
    if (visibleS) {
      setVisibleS(false);
    }
  }

  function searchHandler() {
    setVisibleS(visibleS ? false : true);
    if (visibleM) {
      setVisibleM(false);
    }
  }

  return (
    <>
      <Row align="middle" style={styles.container}>
        <Col span={4} offset={1}>
          <LogoComponent />
        </Col>
        <Col span={14}>
          <MenuComponent />
        </Col>
        <Col span={4} pull={0.2}>
          <Row align="middle" style={{ textAlign: 'center' }}>
            <Col span={12}></Col>
            <Col span={6}>
              <a onClick={searchHandler} style={{ color: 'inherit' }}>
                {!visibleS ? (
                  <SearchOutlined style={styles.menuIcon} />
                ) : (
                  <CloseOutlined style={styles.menuIcon} />
                )}
              </a>
            </Col>
            <Col span={6}>
              <a onClick={menuHandler} style={{ color: 'inherit' }}>
                {!visibleM ? (
                  <MenuOutlined style={styles.menuIcon} />
                ) : (
                  <CloseOutlined style={styles.menuIcon} />
                )}
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
      {visibleM ? (
        <Row align="middle">
          <Col span={24}>
            <MenuSubComponent />
          </Col>
        </Row>
      ) : null}
      {visibleS ? (
        <Row align="middle">
          <Col span={24}>
            <SearchComponent />
          </Col>
        </Row>
      ) : null}
    </>
  );
};

const styles = {
  container: {
    background: 'white',
  },
  menuIcon: {
    fontWeight: 'bold',
    fontSize: 22,
    alignSelf: 'center',
  },
};
