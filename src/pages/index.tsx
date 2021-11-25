import { HeroComponent } from '../components/Hero';
import { HeroTableComponent } from '../components/Hero.table';
import { HeroMobileComponent } from '../components/Hero.mobile';
import { HeaderComponent } from '../components/Header';
import { MobileNavBarComponent } from '../components/Mobile.NavBar';
import { createMedia } from '@artsy/fresnel';
import {
  Layout_Desk_Component,
  Layout_Table_Component,
  Layout_Mobile_Component,
} from '../layouts/index';

const { MediaContextProvider, Media } = createMedia({
  // breakpoints values can be either strings or integers
  breakpoints: {
    sm: 0,
    md: 768,
    lg: 1024,
    xl: 1192,
  },
});

export const IndexPageComponent = () => {
  return (
    <MediaContextProvider>
      <Media greaterThanOrEqual="lg">
        <Layout_Desk_Component
          header={<HeaderComponent />}
          content={<HeroComponent />}
        />
      </Media>
      <Media at="md">
        <Layout_Table_Component
          header={<HeaderComponent />}
          content={<HeroTableComponent />}
        />
      </Media>
      <Media at="sm">
        <Layout_Mobile_Component
          header={<MobileNavBarComponent />}
          content={<HeroMobileComponent />}
        />
      </Media>
    </MediaContextProvider>
  );
};
