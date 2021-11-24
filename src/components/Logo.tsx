import React from 'react';
import { Avatar, Image } from 'antd';

interface LogoProps {
  alt?: string; //图像无法显示时的替代文本
  gap?: number; //4 字符类型距离左右两侧边界单位像素
  shape?: 'circle' | 'square'; //'circle' | 'square'
  size?: object;
  src?: string; // require('../../public/img/logo.png');
  preview?: boolean;
}

export const LogoComponent = ({
  alt,
  gap,
  shape,
  size,
  src,
  preview,
}: LogoProps) => {
  return (
    <Avatar
      alt={alt}
      gap={gap}
      shape={shape}
      size={{ xs: 32, sm: 40, md: 80, lg: 100, xl: 114, xxl: 128 }}
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
