import React, { useState } from 'react';
import { NavBar, Space, Toast, Popup, Button } from 'antd-mobile';
import { SearchOutline, MoreOutline, CloseOutline } from 'antd-mobile-icons';
import { LogoComponent } from './Logo';
import { SearchComponent } from './Search';
import { Affix } from 'antd';

export const MobileNavBarComponent = () => {
  const [visible1, setVisible1] = useState(false);

  const renderRight = (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        fontWeight: 'bold',
      }}
    >
      <SearchOutline fontSize={22} />
      <MoreOutline
        onClick={() => {
          setVisible1(true);
        }}
        fontSize={22}
      />
    </div>
  );

  const renderPopup = (
    <Popup visible={visible1} position="left" bodyStyle={{ minWidth: '100vw' }}>
      <NavBar
        backArrow={false}
        left={<LogoComponent />}
        right={
          <CloseOutline
            onClick={() => {
              setVisible1(false);
            }}
            fontSize={22}
          />
        }
      />
    </Popup>
  );

  return (
    <>
      <NavBar
        backArrow={false}
        left={<LogoComponent />}
        right={renderRight}
        style={{ background: 'white' }}
      />
      {renderPopup}
    </>
  );
};
