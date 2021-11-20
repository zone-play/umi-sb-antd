import React from 'react';
import { Image } from 'antd';
import imgkit from '../../public/img/dog-hat-abstract-black-white-image-bulldog-wearing-smokes-cigar-103691135.jpg'

export default () => {
  return (
    <>
    <Image
      width={200}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    />
    <Image
      width={200}
      src={imgkit}
    />
    </>
  );
}
