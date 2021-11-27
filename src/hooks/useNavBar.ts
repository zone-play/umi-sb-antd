import { useState } from 'react';
import { createModel } from 'hox';

function useNavBar() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return {
    visible,
    showDrawer,
    onClose,
  };
}

export default createModel(useNavBar);
