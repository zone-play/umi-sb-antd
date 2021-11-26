import { HeroComponent } from '../components/Hero/index';
import { HeaderComponent } from '../components/Header/index';
import { LayoutComponent } from '../layouts/index';

export const IndexPageComponent = () => {
  const menuItem = [
    { id: 'tv', label: 'TVs' },
    { id: 'home', label: 'Home Appliances' },
    { id: 'conditioning', label: 'Air Conditioning' },
    { id: 'monitors', label: 'Monitors' },
    { id: 'purifiers', label: 'Air purifiers' },
  ];

  const title = 'AN EVEN BETTER LOOK OF TECHNOLOGY FOR ALL!';
  const src = require('../../public/img/Hero-Image-Home-2.jpg');
  const label = 'About Us';

  return (
    <LayoutComponent
      header={<HeaderComponent menuItem={menuItem} />}
      content={
        <>
          <HeroComponent title={title} src={src} label={label} />
        </>
      }
    />
  );
};
