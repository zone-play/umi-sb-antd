import React, { CSSProperties } from 'react';
import { Row, Col, Image } from 'antd';
import { ButtonComponent } from '../Button';
interface ComponentProps {
  style?: CSSProperties;
  title?: string;
  src?: string;
  label?: string;
  onClick?: () => void;
}

export const HeroTableComponent = ({
  title,
  src,
  label,
  onClick,
}: ComponentProps) => {
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
      {title}
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
            label={label}
            onClick={onClick}
          />
        </div>
      </Col>
      <Col md={24} style={{ display: 'flex', justifyContent: 'center' }}>
        <Image alt="hero" src={src} preview={false} />
      </Col>
    </Row>
  );
};
