import React, { useState } from 'react';
import { Menu } from 'antd';
import { Link } from 'umi';

interface MenuProps {
  onClick: (e: any) => void;
  menuItem: [
    { id: 'tv'; label: 'TVs' },
    { id: 'home'; label: 'Home Appliances' },
    { id: 'conditioning'; label: 'Air Conditioning' },
    { id: 'monitors'; label: 'Monitors' },
    { id: 'purifiers'; label: 'Air purifiers' },
  ];
}

export const MenuComponent = ({ menuItem, ...props }: MenuProps) => {
  const renderMenuItem = menuItem.map((item) => {
    return <Menu.Item key={item.id}>{item.label}</Menu.Item>;
  });

  return (
    <Menu mode="horizontal" {...props}>
      {renderMenuItem}
    </Menu>
  );
};
