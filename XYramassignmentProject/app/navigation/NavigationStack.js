
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';



import Homepage from "./../screens/Homepage";
import HomeDetailpage from "./../screens/HomeDetailpage";



const SignedOutNavigator1 = createStackNavigator({
  Homepage: {
    screen: Homepage,
    navigationOptions: { header: null, gesturesEnabled: false }
  },
  HomeDetailpage: {
    screen: HomeDetailpage,
    navigationOptions: { header: null, gesturesEnabled: false }
  },

});

const SignedOutNavigator = createAppContainer(SignedOutNavigator1);
export default SignedOutNavigator;