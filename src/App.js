import React, { useState, useEffect } from 'react';
import { StatusBar,  } from 'react-native';
import { App } from './navigation';
import { StoreContext } from "./store";
import decode from 'jwt-decode';
import { getFromAsyncStorage, setToAsyncStorage } from './utils/asyncStorage';

export default () => {
  const [user, setUser] = useState(null);
  setToAsyncStorage('user', { kek: 'qweq'})
  useEffect(() => {
    console.log("RELOAD ROOT");
    const a = getFromAsyncStorage('user');
    console.log(a)
    // if (localStorage.userJWT) {
    //   const token = localStorage.userJWT;
    //   const payload = decode(token);
    //   const parsedUser = {
    //     token,
    //     id: payload.id,
    //     name: payload.name
    //   };
    //   setUser(parsedUser);
    // }
  }, []);

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
