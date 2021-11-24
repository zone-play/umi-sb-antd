import React from 'react';
import { LogoComponent } from '../../components/Logo';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'Components',
  component: LogoComponent,
};

const Template: ComponentStory<typeof LogoComponent> = (args) => (
  <LogoComponent />
);

export const Logo = Template.bind({});

Logo.args = {};
