import React from 'react';
import { HeroMobileComponent } from '../../components/Hero.mobile';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'Components',
  component: HeroMobileComponent,
};

const Template: ComponentStory<typeof HeroMobileComponent> = (args) => (
  <HeroMobileComponent />
);

export const HeroMobile = Template.bind({});
