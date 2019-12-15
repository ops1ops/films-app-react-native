import React, { useCallback, useState, useContext } from 'react';
import { Text, StyleSheet, Button } from "react-native";
import theme from "../theme";
import { ScrollView } from "react-native";
import Input from "../components/Input";
import {StoreContext} from "../store";
import {signIn} from "../api";
import Loader from "../components/Loader";

const SignIn = ({ navigation }) => {
  const [isLoading, setLoading] = useState(false);
  const [user, setUser] = useContext(StoreContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handlePress = useCallback(async () => {
    setLoading(true);
    signIn(setLoading, setUser, { email, password });
  }, [email, password]);

  if (user && user.token) {
    navigation.goBack();
  }

  return (
    <ScrollView style={{ ...theme.container, ...styles.container }} contentContainerStyle={{ alignItems: 'center' }}>
      <Input style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      <Input style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} />
      { isLoading && <Loader />}
      <Button
        style={styles.signIn}
        title="Sign In"
        onPress={handlePress}
      />
      <Text>{email + password}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flexDirection: 'column',
  },
  input: {
    width: '85%'
  },
  signIn: {
    marginTop: 20,
    color: 'white',
    fontSize: 25,
    textAlign: 'center'
  }
});

export default SignIn;