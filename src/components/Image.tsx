import React from 'react';
import { Image } from 'antd';
import logo from '../../public/img/logo.jpg';

export default () => {
  return (
    <>
      <Image
        width={200}
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
      <Image width={200} src={logo} />
    </>
  );
};
