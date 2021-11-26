import React from 'react';
import { Media } from '../../media';
import { HeroDeskComponent } from './Hero.desk';
import { HeroMobileComponent } from './Hero.mobile';
import { HeroTableComponent } from './Hero.table';

export const HeroComponent = () => {
  return (
    <>
      <Media at="lg">
        <HeroDeskComponent />
      </Media>
      <Media at="md">
        <HeroTableComponent />
      </Media>
      <Media at="sm">
        <HeroMobileComponent />
      </Media>
    </>
  );
};
