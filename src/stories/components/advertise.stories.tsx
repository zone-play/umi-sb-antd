import React from 'react';
import { AdvertiseComponent } from '../../components/Advertise';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'Components',
  component: AdvertiseComponent,
};

const Template: ComponentStory<typeof AdvertiseComponent> = (args) => (
  <AdvertiseComponent />
);

export const Advertise = Template.bind({});
