import React from 'react';
import { HeroComponent } from '../../components/Hero/index';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'Components',
  component: HeroComponent,
};

const Template: ComponentStory<typeof HeroComponent> = (args) => (
  <HeroComponent />
);

export const Hero = Template.bind({});
