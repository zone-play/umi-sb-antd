import { AdvertiseComponent } from '../components/Advertise';
import { AdvertiseTableComponent } from '../components/Advertise.table';
import { AdvertiseMobileComponent } from '../components/Advertise.mobile';
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
          content={<AdvertiseComponent />}
        />
      </Media>
      <Media at="md">
        <Layout_Table_Component
          header={<HeaderComponent />}
          content={<AdvertiseTableComponent />}
        />
      </Media>
      <Media at="sm">
        <Layout_Mobile_Component
          header={<MobileNavBarComponent />}
          content={<AdvertiseMobileComponent />}
        />
      </Media>
    </MediaContextProvider>
  );
};
