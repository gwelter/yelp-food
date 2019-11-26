import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Search from "./src/pages/Search";
import ResultsShow from "./src/pages/ResultsShow";

const Routes = createAppContainer(
  createStackNavigator(
    { Search, ResultsShow },
    {
      initialNavigationName: "Search",
      defaultNavigationOptions: {
        title: "Business Search"
      }
    }
  )
);

export default Routes;
