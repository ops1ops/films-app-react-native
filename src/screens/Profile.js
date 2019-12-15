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

  return (
    <ScrollView style={theme.container}>
      <Text>13</Text>
      <Button title="Log out" onPress={handlePress}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

});

export default Profile;