import { createDrawerNavigator } from 'react-navigation-drawer';
import React, { Component } from "react";
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'

import { createAppContainer } from 'react-navigation'
import AboutPage from './../screens/AboutPage'
import Demopage from './../screens/Demopage'
import Drawerpage from './../screens/Drawerpage'
import Homepage from './../screens/Homepage'
import HomeDetaile from './../screens/HomeDetaile'
const Drawer = createDrawerNavigator({

    Homepage: {
        screen: Homepage,
        navigationOptions: { header: null, gesturesEnabled: false }
    },
    AboutPage: {
        screen: AboutPage,
        navigationOptions: { header: null, gesturesEnabled: false }
    },
    HomeDetaile: {
        screen: HomeDetaile,
        navigationOptions: { header: null, gesturesEnabled: false }
    },

    Demopage: {
        screen: Demopage,
        navigationOptions: { header: null, gesturesEnabled: false }
    },

},
    {
        drawerWidth: Dimensions.get('window').width * 0.8,
        drawerPosition: 'right',
        contentComponent: ({ navigation }) => <Drawerpage navigation={navigation} />
    }
)
const DrwerNavigator = createAppContainer(Drawer)
export default DrwerNavigator