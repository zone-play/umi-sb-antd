import { Menu } from 'antd';
interface ComponentProps {
  menuItem?: any[];
}

export const MenuComponent = ({ menuItem }: ComponentProps) => {
  const renderMenuItem = menuItem?.map((item) => {
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
