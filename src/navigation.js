import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import FilmDetails from "./screens/Films/FilmDetails";

const AppNavigator = createStackNavigator(
  {
    FilmDetails: { screen: FilmDetails },
  },
  {
    initialRouteName: 'FilmDetails',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#393939',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export const App = createAppContainer(AppNavigator);