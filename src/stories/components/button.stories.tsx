import React from 'react';
import { ButtonComponent } from '../../components/Button';

import { ComponentStory } from '@storybook/react';
import { GithubOutlined } from '@ant-design/icons';

// 1. 定义故事
export default {
  title: 'Components',
  component: ButtonComponent,
};

// 2. 获取组件参数
const Template: ComponentStory<typeof ButtonComponent> = (args) => (
  <ButtonComponent {...args} />
);

// 3. 绑定故事模板
export const Button = Template.bind({}); //Button

// 4. 给故事设置默认值
Button.args = {
  type: 'primary', //'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default'
  shape: 'round', //'default' | 'circle' | 'round'
  size: 'middle', //'large' | 'middle' | 'small'
  loading: false, //boolean | { delay?: number }
  disabled: false, //boolean
  block: false, //boolean
  danger: false, //boolean
  ghost: false, //boolean
  icon: null, //ReactNode
  // href: '', //string
  // target: '_blank', //string
  label: '按钮',
  // onClick: () => void
};
