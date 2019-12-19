import React, { useContext, useEffect, useState } from 'react';
import {Text, StyleSheet, View} from "react-native";
import theme from "../../theme";
import { ScrollView } from "react-native";
import {ProfileContext, StoreContext} from "../../store";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TopNavigation from "./TopNavigation";
import {setUserInfoFromRequest} from "../../api";
import Loader from "../../components/Loader";

function Profile({ navigation }) {
  const [user, setUser] = useContext(StoreContext);
  const [userInfo, setUserInfo] = useState();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setUserInfoFromRequest(id, setUserInfo, setLoading);
  }, []);

  const handlePress = () => {
    setUser(null);
    navigation.goBack();
  };

  if (!user) return null;

  const { name , id } = user;

  if (!userInfo || isLoading) return <Loader />;

  return (
    <ScrollView style={{ ...theme.container, ...styles.container}}>
      <ProfileContext.Provider value={{ userInfo, navigation }}>
        <View style={styles.profileContainer}>
          <View style={styles.avatarContainer}>
            <FontAwesome size={30} name="user-circle" color="#A0A0A0" />
            <Text style={styles.name}>{ name }</Text>
          </View>
          <MaterialCommunityIcons name="exit-to-app" size={30} color="#fff" onPress={handlePress}/>
        </View>
        <TopNavigation />
      </ProfileContext.Provider>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    ...theme.bottomDivider,
    backgroundColor: '#212121',
    flexDirection: 'row',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
  },
  name: {
    color: 'white',
    fontSize: 20,
    marginLeft: 10,
  },
  text: {
    color: 'white',
    fontSize: 25
  }
});

export default Profile;
