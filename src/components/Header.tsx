import React from 'react';
import { Row, Col } from 'antd';

export const HeaderComponent = () => {
  return (
    <Row>
      <Col span={6}>col-6</Col>
      <Col span={12}>col-12</Col>
      <Col span={6}>col-6</Col>
    </Row>
  );
};
