import React from 'react';
import { Media } from '../../media';
import { HeroDeskComponent } from './Hero.desk';
import { HeroMobileComponent } from './Hero.mobile';
import { HeroTableComponent } from './Hero.table';

export const HeroComponent = () => {
  const title = 'AN EVEN BETTER LOOK OF TECHNOLOGY FOR ALL!';
  const src = require('../../../public/img/Hero-Image-Home-2.jpg');
  const label = 'About Us';
  return (
    <>
      <Media at="lg">
        <HeroDeskComponent title={title} src={src} label={label} />
      </Media>
      <Media at="md">
        <HeroTableComponent title={title} src={src} label={label} />
      </Media>
      <Media at="sm">
        <HeroMobileComponent title={title} src={src} label={label} />
      </Media>
    </>
  );
};
