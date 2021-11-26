import React from 'react';
import { Media } from '../../media';
import { HeroDeskComponent } from './Hero.desk';
import { HeroMobileComponent } from './Hero.mobile';
import { HeroTableComponent } from './Hero.table';

interface ComponentProps {
  title?: string;
  src?: string;
  label?: string;
}

export const HeroComponent = ({ title, src, label }: ComponentProps) => {
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
