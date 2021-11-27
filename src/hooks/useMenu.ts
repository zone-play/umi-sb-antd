import { useState } from 'react';
import { createModel } from 'hox';

function useMenu() {
  const [visibleM, setVisibleM] = useState(false);
  const [visibleS, setVisibleS] = useState(false);

  const menuHandler = () => {
    setVisibleM(visibleM ? false : true);
    if (visibleS) {
      setVisibleS(false);
    }
  };

  const searchHandler = () => {
    setVisibleS(visibleS ? false : true);
    if (visibleM) {
      setVisibleM(false);
    }
  };

  return {
    visibleM,
    visibleS,
    menuHandler,
    searchHandler,
  };
}

export default createModel(useMenu);
