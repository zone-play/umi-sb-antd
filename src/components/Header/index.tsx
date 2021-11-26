import React from 'react';
import { Media } from '../../media';
import { Header } from './Header';
import { NavBarComponent } from './NavBar';

export const HeaderComponent = () => {
  return (
    <>
      <Media at="lg">
        <Header />
      </Media>
      <Media at="md">
        <Header />
      </Media>
      <Media at="sm">
        <NavBarComponent />
      </Media>
    </>
  );
};
