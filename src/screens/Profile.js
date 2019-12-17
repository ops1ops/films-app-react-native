import React, { useContext } from 'react';
import { Text, StyleSheet } from "react-native";
import theme from "../theme";
import { ScrollView, Button } from "react-native";
import {StoreContext} from "../store";

function Profile({ navigation }) {
  const [user, setUser] = useContext(StoreContext);
  const handlePress = () => {
    setUser(null);
    navigation.goBack();
  };

  if (!user) return null;

  const { token, name, id, email } = user;

  return (
    <ScrollView style={theme.container}>
      <Text>{token}</Text>
      <Text>{name}</Text>
      <Text>{id}</Text>
      <Text>{email}</Text>
      <Button title="Log out" onPress={handlePress}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

});

export default Profile;
