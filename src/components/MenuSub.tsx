import React, { useState } from 'react';
import { Col, Row } from 'antd';
import { Link } from 'umi';
import {
  FieldTimeOutlined,
  MailOutlined,
  MessageOutlined,
  SettingOutlined,
} from '@ant-design/icons';

interface MenuProps {}

export const MenuSubComponent = ({ ...props }: MenuProps) => {
  function MouseOver(event: any) {
    event.target.style.color = 'lightBlue';
  }
  function MouseOut(event: any) {
    event.target.style.color = 'inherit';
  }

  return (
    <Row style={styles.container}>
      <a style={styles.a} onMouseOver={MouseOver} onMouseOut={MouseOut}>
        <FieldTimeOutlined style={styles.icon} />
        About us
      </a>
      <a style={styles.a} onMouseOver={MouseOver} onMouseOut={MouseOut}>
        <MessageOutlined style={styles.icon} />
        Blog
      </a>
      <a style={styles.a} onMouseOver={MouseOver} onMouseOut={MouseOut}>
        <SettingOutlined style={styles.icon} />
        Service
      </a>
      <a style={styles.a} onMouseOver={MouseOver} onMouseOut={MouseOut}>
        <MailOutlined style={styles.icon} />
        Contact
      </a>
    </Row>
  );
};

const styles = {
  container: {
    paddingTop: 0,
    paddingBottom: 48,
    justifyContent: 'center',
    background: 'white',
  },
  a: {
    color: 'inherit',
    display: 'inline-flex',
    flexDirection: 'column',
    marginLeft: 24,
    marginRight: 24,
    fontWeight: 'bold',
  },
  icon: { fontSize: 20 },
};
