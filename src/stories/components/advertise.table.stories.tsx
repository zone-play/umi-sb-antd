import React from 'react';
import { AdvertiseTableComponent } from '../../components/Advertise.table';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'Components',
  component: AdvertiseTableComponent,
};

const Template: ComponentStory<typeof AdvertiseTableComponent> = (args) => (
  <AdvertiseTableComponent />
);

export const AdvertiseTable = Template.bind({});
