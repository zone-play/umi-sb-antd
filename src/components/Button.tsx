import React from 'react';
import { Button } from 'antd';
interface ButtonProps {
  style?: object;
  type?: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default';
  shape?: 'circle' | 'round' | 'default';
  size?: 'large' | 'middle' | 'small';
  loading?: boolean | { delay?: number };
  disabled?: boolean;
  block?: boolean;
  danger?: boolean;
  ghost?: boolean;
  href?: string;
  icon?: any; //ReactNode
  target?: string;
  label?: string;
  onClick?: () => void;
}

export const ButtonComponent = ({
  type,
  shape,
  size,
  loading,
  disabled,
  block,
  danger,
  ghost,
  icon,
  href,
  target,
  label,
  ...props
}: ButtonProps) => {
  return (
    <Button
      type={type}
      shape={shape}
      size={size}
      loading={loading}
      disabled={disabled}
      block={block}
      danger={danger}
      ghost={ghost}
      href={href}
      icon={icon}
      target={target}
      {...props}
    >
      {label}
    </Button>
  );
};
