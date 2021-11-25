import React from 'react';
import { AdvertiseMobileComponent } from '../../components/Advertise.mobile';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'Components',
  component: AdvertiseMobileComponent,
};

const Template: ComponentStory<typeof AdvertiseMobileComponent> = (args) => (
  <AdvertiseMobileComponent />
);

export const AdvertiseMobile = Template.bind({});
