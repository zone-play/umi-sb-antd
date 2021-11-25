import { ComponentStory } from '@storybook/react';
import React from 'react';
import { IndexPageComponent } from '../../pages/index';

export default {
  title: 'Pages',
  component: IndexPageComponent,
};

const Template: ComponentStory<typeof IndexPageComponent> = (args) => (
  <IndexPageComponent />
);

export const IndexPage = Template.bind({});
