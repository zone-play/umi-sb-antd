import React from 'react';
import { MenuSubComponent } from '../../components/MenuSub';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'Components',
  component: MenuSubComponent,
};

const Template: ComponentStory<typeof MenuSubComponent> = (args) => (
  <MenuSubComponent {...args} />
);

export const MenuSub = Template.bind({});
