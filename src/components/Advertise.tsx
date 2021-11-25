import React from 'react';
import { Row, Col, Image, Avatar } from 'antd';
import { ButtonComponent } from './Button';

export const AdvertiseComponent = () => {
  const adStr = (
    <h1>
      AN EVEN BETTER
      <br />
      LOOK OF
      <br />
      TECHNOLOGY FOR
      <br />
      ALL!
    </h1>
  );
  return (
    <Row
      align="middle"
      justify="center"
      style={{ background: 'rgb(171, 217, 243)' }}
    >
      <Col xs={24} sm={24} md={10} lg={10} xl={10}>
        <Row align="middle" style={{ justifyContent: 'center' }}>
          <Col>{adStr}</Col>
        </Row>
        <Row align="middle" style={{ justifyContent: 'center' }}>
          <Col>
            <ButtonComponent
              style={{
                maxWidth: 180,
                color: '#000',
                borderWidth: 1,
                borderColor: '#000',
              }}
              type="default"
              shape="round"
              size="large"
              ghost={true}
              href=""
              label="About Us"
            />
          </Col>
        </Row>
      </Col>
      <Col
        xs={24}
        sm={24}
        md={14}
        lg={14}
        xl={14}
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <Avatar
          alt="hero"
          gap={0}
          shape="square"
          size={{ xs: 280, sm: 320, md: 380, lg: 440, xl: 480, xxl: 560 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          src={
            <Image
              alt="hero"
              src={require('../../public/img/Hero-Image-Home-2.jpg')}
              preview={false}
            />
          }
        />
      </Col>
      <Col
        xs={24}
        sm={24}
        md={14}
        lg={14}
        xl={14}
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <Avatar
          alt="hero"
          gap={0}
          shape="square"
          size={{ xs: 280, sm: 320, md: 380, lg: 440, xl: 480, xxl: 560 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          src={
            <Image
              alt="hero"
              src={require('../../public/img/Hero-Image-Home-2.jpg')}
              preview={false}
            />
          }
        />
      </Col>
    </Row>
  );
};
