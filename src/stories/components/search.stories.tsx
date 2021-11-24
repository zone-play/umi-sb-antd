import React from 'react';
import { SearchComponent } from '../../components/Search';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'Components',
  component: SearchComponent,
};

const Template: ComponentStory<typeof SearchComponent> = (args) => (
  <SearchComponent />
);

export const Search = Template.bind({});
