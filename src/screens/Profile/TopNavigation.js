import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from "react-navigation";
import RatingsTab from "./RatingsTab";
import theme from "../../theme";
import WatchList from "./WatchlistTab";

const TopNavigation = createMaterialTopTabNavigator({
  Rated: RatingsTab,
  WatchList: WatchList,
}, {
  tabBarOptions: {
    indicatorStyle: {
      backgroundColor: 'gray'
    },
    style: {
      backgroundColor: '#212121',
    },
  }
});

export default createAppContainer(TopNavigation);