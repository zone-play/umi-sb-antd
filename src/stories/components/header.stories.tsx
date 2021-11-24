import React from 'react';
import { HeaderComponent } from '../../components/Header';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'Components',
  component: HeaderComponent,
};

const Template: ComponentStory<typeof HeaderComponent> = (args) => (
  <HeaderComponent />
);

export const Header = Template.bind({});

Header.args = {};
