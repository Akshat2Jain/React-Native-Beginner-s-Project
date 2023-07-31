import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screen/SearchScreen";
import ResultShow from "./src/screen/ResultShow";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultShow: ResultShow,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Buisness Search",
    },
  }
);

export default createAppContainer(navigator);
