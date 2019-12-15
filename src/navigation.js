import React, { useContext } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import FilmsOverview from "./screens/Films/FilmsOverview";
import FilmDetails from "./screens/Films/FilmDetails";
import Genres from "./screens/Genres";
import ActorDetails from "./screens/Actors/ActorDetails";

import Profile from "./screens/Profile";
import UserProfileIcon from "./components/UserProfileIcon";
import SignIn from "./screens/SignIn";
import HeaderTitle from './components/HeaderTitle';

// TODO: change touch color back button to white

const AppNavigator = createStackNavigator(
  {
    FilmsOverview: { screen: FilmsOverview, navigationOptions: ({ navigation }) => ({ headerTitle: <HeaderTitle navigation={navigation}/>}) },
    FilmDetails: { screen: FilmDetails, navigationOptions: { title: 'Film Details'} },
    Genres: { screen: Genres, navigationOptions: ({ navigation }) => ({ title: navigation.getParam('title', '')}) },
    ActorDetails: { screen: ActorDetails, navigationOptions: { title: 'Actor Details'} },
    Profile: { screen: Profile, navigationOptions: { title: 'Profile' } },
    SignIn: { screen: SignIn, navigationOptions: { title: 'Sign In'} },
  },
  {
    initialRouteName: 'FilmsOverview',
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#393939',
      },
      headerTintColor: '#fff',
      headerRight: () => <UserProfileIcon navigation={navigation} />
    })

  }
);

export const App = createAppContainer(AppNavigator);
