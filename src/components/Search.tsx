import { Input, Row } from 'antd';
import React from 'react';

export const SearchComponent = () => {
  return (
    <Row style={styles.container}>
      <Input
        style={{ textAlign: 'center', fontSize: 24 }}
        placeholder="Type to Search"
        bordered={false}
      />
    </Row>
  );
};

const styles = {
  container: {
    paddingTop: 0,
    paddingBottom: 48,
    justifyContent: 'center',
    background: 'white',
  },
};
