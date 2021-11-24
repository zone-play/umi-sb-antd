import React from 'react';
import { MobileNavBarComponent } from '../../components/Mobile.NavBar';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'Components',
  component: MobileNavBarComponent,
};

const Template: ComponentStory<typeof MobileNavBarComponent> = (args) => (
  <MobileNavBarComponent />
);

export const MobileNavbar = Template.bind({});
