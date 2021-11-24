import React from 'react';
import { MenuComponent } from '../../components/Menu';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'Components',
  component: MenuComponent,
};

const Template: ComponentStory<typeof MenuComponent> = (args) => (
  <MenuComponent />
);

export const Menu = Template.bind({});
