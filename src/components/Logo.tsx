import React from 'react';
import { Avatar, Image } from 'antd';

interface LogoProps {
  alt?: 'TESLA'; //图像无法显示时的替代文本
  gap?: 4; //4 字符类型距离左右两侧边界单位像素
  shape?: 'square'; //circle | square
  size?: { xs: 24; sm: 32; md: 40; lg: 64; xl: 80; xxl: 100 };
  src?: '../../public/img/logo.jpg';
  preview?: false;
}

export const LogoComponent = ({
  alt,
  gap,
  shape,
  size,
  src,
  preview,
  ...props
}: LogoProps) => {
  return (
    <Avatar
      alt={alt}
      gap={gap}
      shape={shape}
      size={size}
      src={<Image src={src} preview={preview} />}
      {...props}
    />
  );
};
