import React, { useCallback, useState, useContext } from 'react';
import { StyleSheet, Button, View, Text } from "react-native";
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
    navigation.getParam('successLogin', () => {});
  }, [email, password]);

  if (user && user.token) {
    navigation.goBack();
  }

  return (
    <ScrollView style={{ ...theme.container, ...styles.container }} contentContainerStyle={{ alignItems: 'center' }}>
      <Input style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      <Input
        style={{ ...styles.input, marginBottom: 40 }}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        autoCapitalize='none'
      />
      { isLoading && <Loader />}
      <View style={styles.signIn}>
        <Button
          title="Sign In"
          onPress={handlePress}
        />
      </View>
      <Text style={styles.or}>or</Text>
      <Text style={styles.signUp}>SignUp</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flexDirection: 'column',
  },
  input: {
    width: '85%',
    marginBottom: 20,
  },
  signIn: {
    marginTop: 20,
    height: 50,
    width: 150,
    color: 'white',
    fontSize: 25,
    textAlign: 'center'
  },
  or: {
    color: 'white',
    fontSize: 15,
  },
  signUp: {
    color: '#20A0DD',
    fontSize: 20
  }
});

export default SignIn;
