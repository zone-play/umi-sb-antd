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

export default function IndexPage() {
  return (
    <MediaContextProvider>
      <Media greaterThanOrEqual="lg">
        <Layout_Desk_Component />
      </Media>
      <Media at="md">
        <Layout_Table_Component />
      </Media>
      <Media at="sm">
        <Layout_Mobile_Component />
      </Media>
    </MediaContextProvider>
  );
}
