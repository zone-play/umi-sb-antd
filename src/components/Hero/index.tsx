import React from 'react';
import { Media } from '../../media';
import { HeroDeskComponent } from './Hero.desk';
import { HeroMobileComponent } from './Hero.mobile';
import { HeroTableComponent } from './Hero.table';

interface ComponentProps {
  title?: string;
  src?: string;
  label?: string;
  onClick?: () => void;
}

export const HeroComponent = ({
  title,
  src,
  label,
  onClick,
}: ComponentProps) => {
  return (
    <>
      <Media at="lg">
        <HeroDeskComponent
          title={title}
          src={src}
          label={label}
          onClick={onClick}
        />
      </Media>
      <Media at="md">
        <HeroTableComponent
          title={title}
          src={src}
          label={label}
          onClick={onClick}
        />
      </Media>
      <Media at="sm">
        <HeroMobileComponent
          title={title}
          src={src}
          label={label}
          onClick={onClick}
        />
      </Media>
    </>
  );
};
