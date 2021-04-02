import React, { Component } from "react";
import { View, Text, TouchableOpacity } from 'react-native'
class HomeDetaile extends Component {
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps', this.props);

    }
    renderLeftButton() {
        return (
            <View style={{ flexDirection: 'row' }}>


                <TouchableOpacity
                    //style={styles.menu_icon}
                    // hitSlop={{ top: slop, left: slop, right: slop, bottom: slop }}
                    onPress={() => {
                        this.props.navigation.toggleDrawer();
                        // this.props.navigation.dispatch(DrawerActions.openDrawer());
                        //this.props.navigation.openDrawer();

                    }}
                >
                    <Text style={{ fontSize: 20 }}>sidemenu</Text>
                </TouchableOpacity>

            </View>
        );
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                {this.renderLeftButton()}
                <View style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }} >
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('Homepage', { name: 'shiva' })
                        }}>
                        <Text style={{ fontSize: 30 }}>
                            go to home
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
export default HomeDetaile