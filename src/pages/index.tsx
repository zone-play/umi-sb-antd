import { HeroComponent } from '../components/Hero/index';
import { HeaderComponent } from '../components/Header/index';
import { LayoutComponent } from '../layouts/index';

export const IndexPageComponent = () => {
  return (
    <LayoutComponent
      header={<HeaderComponent />}
      content={
        <>
          <HeroComponent />
        </>
      }
    />
  );
};
