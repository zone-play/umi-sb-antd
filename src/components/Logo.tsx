import React from 'react';
import { Avatar, Image } from 'antd';

interface LogoProps {
  alt?: string; //图像无法显示时的替代文本
  gap?: number; //4 字符类型距离左右两侧边界单位像素
  shape?: 'circle' | 'square'; //'circle' | 'square'
  size?: object;
  src?: string; // require('../../public/img/logo.png');
  preview?: boolean;
  style?: object;
}

export const LogoComponent = ({
  alt,
  gap,
  shape,
  size,
  src,
  preview,
  style,
}: LogoProps) => {
  return (
    <Avatar
      alt={alt}
      gap={gap}
      shape={shape}
      size={{ xs: 68, sm: 78, md: 88, lg: 98, xl: 108, xxl: 118 }}
      style={{}}
      src={
        <Image
          alt={alt}
          src={require('../../public/img/logo.png')}
          preview={false}
        />
      }
    />
  );
};
