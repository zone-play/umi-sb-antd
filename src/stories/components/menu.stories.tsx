import React from 'react';
import { MenuComponent } from '../../components/Menu';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'Components',
  component: MenuComponent,
};

const Template: ComponentStory<typeof MenuComponent> = (args) => (
  <MenuComponent {...args} />
);

export const Menu = Template.bind({});

Menu.args = {
  onClick: (e) => {
    e;
    console.log(e);
  },
  menuItem: [
    { id: 'tv', label: 'TVs' },
    { id: 'home', label: 'Home Appliances' },
    { id: 'conditioning', label: 'Air Conditioning' },
    { id: 'monitors', label: 'Monitors' },
    { id: 'purifiers', label: 'Air purifiers' },
  ],
};
