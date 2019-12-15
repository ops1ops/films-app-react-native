import React, { useContext, useCallback } from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import {StoreContext} from "../store";
import theme from "../theme";

export const UserProfileIcon = ({ navigation }) => {
  const [user] = useContext(StoreContext);

  const handlePress = useCallback(() => {
    if (user && user.token) {
      navigation.navigate('Profile')
    } else {
      navigation.navigate('SignIn')
    }
  }, [user]);

  return (
    <TouchableOpacity style={styles.container} activeOpacity={theme.cardTouchOpacity}>
      <Icon
        onPress={handlePress}
        size={22}
        name="user-circle"
        color="#eee"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 7,
    padding: 8,
  }
});

export default UserProfileIcon;
