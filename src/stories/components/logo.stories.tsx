import React from 'react';
import { LogoComponent } from '../../components/Logo';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'Components',
  component: LogoComponent,
};

const Template: ComponentStory<typeof LogoComponent> = (args) => (
  <LogoComponent {...args} />
);

export const Logo = Template.bind({});

Logo.args = {
  alt: 'TESLA', //图像无法显示时的替代文本
  gap: 4, //字符类型距离左右两侧边界单位像素
  shape: 'square', //circle | square
};
