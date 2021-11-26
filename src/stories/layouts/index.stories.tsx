import React from 'react';
import { LayoutComponent } from '../../layouts/index';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'Layouts',
  component: LayoutComponent,
};

const Template: ComponentStory<typeof LayoutComponent> = () => (
  <LayoutComponent />
);
export const Layout = Template.bind({});
