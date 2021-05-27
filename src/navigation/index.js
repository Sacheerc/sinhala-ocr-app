import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { EditContent } from "../screens/editContent/EditContent";
import { HomeScreen } from "../screens/home/HomeScreen";

const StackNavigator = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
    },
    EditContent: {
      screen: EditContent,
    },
  },
  {
    initialRouteName: "HomeScreen",
    headerMode: "none",
  }
);

export default createAppContainer(StackNavigator);
