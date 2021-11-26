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

export const HeroDeskComponent = ({
  style,
  title,
  src,
  label,
  onClick,
}: ComponentProps) => {
  const adStr = (
    <h1 style={{ fontWeight: 800, fontSize: 32, marginBottom: 26 }}>{title}</h1>
  );
  return (
    <Row
      align="middle"
      justify="center"
      style={{ background: 'rgb(171, 217, 243)' }}
    >
      <Col lg={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <div style={{ display: 'inline', width: '50%' }}>
          {adStr}
          <ButtonComponent
            style={{
              maxWidth: 180,
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
      <Col lg={12} style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <Image alt="hero" src={src} preview={false} />
      </Col>
    </Row>
  );
};
