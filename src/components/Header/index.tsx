import React from 'react';
import { Media } from '../../media';
import { MenuComponent } from '../Menu';
import { MenuSubComponent } from '../MenuSub';
import { SearchComponent } from '../Search';
import { Header } from './Header';
import { NavBarComponent } from './NavBar';

interface ComponentProps {
  menuItem?: any[];
}

export const HeaderComponent = ({ menuItem }: ComponentProps) => {
  return (
    <>
      <Media at="lg">
        <Header
          menu={<MenuComponent menuItem={menuItem} />}
          menuSub={<MenuSubComponent />}
          search={<SearchComponent />}
        />
      </Media>
      <Media at="md">
        <Header
          menu={<MenuComponent menuItem={menuItem} />}
          menuSub={<MenuSubComponent />}
          search={<SearchComponent />}
        />
      </Media>
      <Media at="sm">
        <NavBarComponent />
      </Media>
    </>
  );
};
