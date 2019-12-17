import AsyncStorage from '@react-native-community/async-storage';

export const getFromAsyncStorage = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    const parsedValue = JSON.parse(value);
    if(parsedValue !== null) {
      return parsedValue;
    }
  } catch (error) {
    console.log("ERROR: ", error)
  }
};

export const setToAsyncStorage = async (key, value) => {
  try {
    await AsyncStorage.getItem(JSON.stringify(value));
  } catch (error) {
    console.log("ERROR: ", error)
  }
};
