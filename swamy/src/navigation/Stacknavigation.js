import { createAppContainer } from 'react-navigation'

import { createStackNavigator } from 'react-navigation-stack'
import Homepage from './../screens/Homepage'
import HomeDetaile from './../screens/HomeDetaile'
import Drawer from './Drawernavigatin'
import Highchart from './../screens/Highchart'
const stack = createStackNavigator({
    HomeDetaile: {
        screen: HomeDetaile,
        navigationOptions: { header: null, gesturesEnabled: false }
    },
    Homepage: {
        screen: Homepage,
        navigationOptions: { header: null, gesturesEnabled: false }
    },
    Highchart: {
        screen: Highchart,
        navigationOptions: { header: null, gesturesEnabled: false }
    },

    Drawer: {
        screen: Drawer,
        navigationOptions: { header: null, gesturesEnabled: false }
    },
})
const StackNavigator = createAppContainer(stack)
export default StackNavigator