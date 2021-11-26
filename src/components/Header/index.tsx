import React from 'react';
import { Media } from '../../media';
import { MenuComponent } from '../Menu';
import { MenuSubComponent } from '../MenuSub';
import { Header } from './Header';
import { NavBarComponent } from './NavBar';

export const HeaderComponent = () => {
  const menuItem = [
    { id: 'tv', label: 'TVs' },
    { id: 'home', label: 'Home Appliances' },
    { id: 'conditioning', label: 'Air Conditioning' },
    { id: 'monitors', label: 'Monitors' },
    { id: 'purifiers', label: 'Air purifiers' },
  ];

  return (
    <>
      <Media at="lg">
        <Header
          menu={<MenuComponent menuItem={menuItem} />}
          menuSub={<MenuSubComponent />}
        />
      </Media>
      <Media at="md">
        <Header
          menu={<MenuComponent menuItem={menuItem} />}
          menuSub={<MenuSubComponent />}
        />
      </Media>
      <Media at="sm">
        <NavBarComponent />
      </Media>
    </>
  );
};
