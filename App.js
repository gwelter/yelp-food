import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Search from "./src/pages/Search";

const Routes = createAppContainer(
  createStackNavigator(
    { Search },
    {
      initialNavigationName: "Search",
      defaultNavigationOptions: {
        title: "Business Search"
      }
    }
  )
);

export default Routes;
