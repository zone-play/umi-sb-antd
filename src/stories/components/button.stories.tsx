import React from 'react';
import { ButtonComponent } from '../../components/Button';

import { ComponentStory } from '@storybook/react';
import {GithubOutlined} from '@ant-design/icons'

export default {
  title: 'Components',
  component: ButtonComponent
} 

const Template: ComponentStory<typeof ButtonComponent> = (args) => <ButtonComponent {...args} />;

export const Button = Template.bind({}) //Button

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
  label: '按钮'
  // onClick: () => void
}
