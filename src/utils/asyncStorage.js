import AsyncStorage from '@react-native-community/async-storage';
import decode from 'jwt-decode';
import setToken from './setToken';

export const getFromAsyncStorage = async (key, setUser) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if(value !== null) {
      const parsedUser = JSON.parse(value);
      if (parsedUser.token) {
        const { token } = parsedUser;
        const payload = decode(token);
        const user = {
          token,
          id: payload.id,
          name: payload.name
        };
        setUser(user);
      }
    }
  } catch (error) {
    console.log("ERROR: ", error)
  }
};

export const setToAsyncStorage = async (key, user) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(user));
    const { token } = user;
    setToken(token);
  } catch (error) {
    console.log("ERROR: ", error)
  }
};
