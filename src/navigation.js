import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import FilmsOverview from "./screens/Films/FilmsOverview";
import FilmDetails from "./screens/Films/FilmDetails";
import Genres from "./screens/Genres";
import {View, Text} from "react-native";

// TODO: change touch color back button to white

const AppNavigator = createStackNavigator(
  {
    FilmsOverview: { screen: FilmsOverview },
    FilmDetails: { screen: FilmDetails, navigationOptions: { title: 'Film Details'} },
    Genres: { screen: Genres, navigationOptions: ({ navigation }) => ({ title: navigation.getParam('title', '')}) }
  },
  {
    initialRouteName: 'FilmsOverview',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#393939',
      },
      headerTintColor: '#fff'
    })

  }
);

export const App = createAppContainer(AppNavigator);