import React from 'react';
import { HeaderComponent } from '../../components/Header/index';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'Components',
  component: HeaderComponent,
};

const Template: ComponentStory<typeof HeaderComponent> = (args) => (
  <HeaderComponent {...args} />
);

export const Header = Template.bind({});

Header.args = {
  menuItem: [
    { id: 'tv', label: 'TVs' },
    { id: 'home', label: 'Home Appliances' },
    { id: 'conditioning', label: 'Air Conditioning' },
    { id: 'monitors', label: 'Monitors' },
    { id: 'purifiers', label: 'Air purifiers' },
  ],
};
