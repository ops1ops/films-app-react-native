import React, { useState, useEffect } from 'react';
import { StatusBar,  } from 'react-native';
import { App } from './navigation';
import {StoreContext} from "./store";

export default () => {
  const [user, setUser] = useState(null);

  useEffect(() => {

  });

  return (
    <>
      <StoreContext.Provider value={[user, setUser]}>
        <StatusBar backgroundColor="#1D1D1D" />
        <App />
      </StoreContext.Provider>
    </>
  );
};

/*
COLORS (will be needed when add themes):
see all - #20A0DD
container - #212121
header - c
tabs - #303030
card bottom view - #2A2A2A

 */
