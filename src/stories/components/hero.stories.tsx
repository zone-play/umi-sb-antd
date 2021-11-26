import React from 'react';
import { HeroComponent } from '../../components/Hero/index';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'Components',
  component: HeroComponent,
  parameters: { actions: { argTypesRegex: '^on[A-Z].*' } },
};

const Template: ComponentStory<typeof HeroComponent> = (args) => (
  <HeroComponent {...args} />
);

export const Hero = Template.bind({});

Hero.args = {
  title: 'AN EVEN BETTER LOOK OF TECHNOLOGY FOR ALL!',
  src: require('../../../public/img/Hero-Image-Home-2.jpg'),
  label: 'About Us',
  onClick: () => {
    console.log('action');
  },
};
