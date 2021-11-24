import React, { useState } from 'react';
import { Menu } from 'antd';
import { Link } from 'umi';

const menuItem = [
  { id: 'tv', label: 'TVs' },
  { id: 'home', label: 'Home Appliances' },
  { id: 'conditioning', label: 'Air Conditioning' },
  { id: 'monitors', label: 'Monitors' },
  { id: 'purifiers', label: 'Air purifiers' },
];

export const MenuComponent = () => {
  const renderMenuItem = menuItem.map((item) => {
    return (
      <Menu.Item key={item.id}>
        <h3 style={{ marginBottom: 0, fontWeight: 'bold' }}>
          {item.label.toUpperCase()}
        </h3>
      </Menu.Item>
    );
  });

  return (
    <Menu
      mode="horizontal"
      style={{ justifyContent: 'center', textAlign: 'center' }}
    >
      {renderMenuItem}
    </Menu>
  );
};
