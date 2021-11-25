import React from 'react';
import { HeroTableComponent } from '../../components/Hero.table';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'Components',
  component: HeroTableComponent,
};

const Template: ComponentStory<typeof HeroTableComponent> = (args) => (
  <HeroTableComponent />
);

export const HeroTable = Template.bind({});
