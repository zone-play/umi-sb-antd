import React from 'react';
import { Row, Col, Image, Avatar } from 'antd';
import { ButtonComponent } from './Button';

export const HeroTableComponent = () => {
  const adStr = (
    <h1
      style={{
        fontWeight: 700,
        fontSize: 28,
        marginBottom: 20,
        textAlign: 'center',
        width: '80%',
      }}
    >
      AN EVEN BETTER LOOK OF TECHNOLOGY FOR ALL!
    </h1>
  );
  return (
    <Row
      align="middle"
      justify="center"
      style={{ background: 'rgb(171, 217, 243)' }}
    >
      <Col md={24} style={{ display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: 24,
          }}
        >
          {adStr}
          <ButtonComponent
            style={{
              maxWidth: 160,
              color: '#000',
              borderWidth: 2,
              borderColor: '#000',
            }}
            type="default"
            shape="round"
            size="large"
            ghost={true}
            href=""
            label="About Us"
          />
        </div>
      </Col>
      <Col md={24} style={{ display: 'flex', justifyContent: 'center' }}>
        <Image
          alt="hero"
          src={require('../../public/img/Hero-Image-Home-2.jpg')}
          preview={false}
        />
      </Col>
    </Row>
  );
};
