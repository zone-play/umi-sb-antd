import React from 'react';
import {
  Layout_Desk_Component,
  Layout_Table_Component,
  Layout_Mobile_Component,
} from '../../layouts/index';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'Layouts',
  component: Layout_Desk_Component,
};

const Template_Desk: ComponentStory<typeof Layout_Desk_Component> = () => (
  <Layout_Desk_Component />
);
export const LayoutDesk = Template_Desk.bind({});

const Template_Table: ComponentStory<typeof Layout_Table_Component> = () => (
  <Layout_Table_Component />
);
export const LayoutTable = Template_Table.bind({});

const Template_Mobile: ComponentStory<typeof Layout_Mobile_Component> = () => (
  <Layout_Mobile_Component />
);
export const LayoutMobile = Template_Mobile.bind({});
