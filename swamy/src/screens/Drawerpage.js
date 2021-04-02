import React, { Component } from "react";
import { View, Text, TouchableOpacity } from 'react-native'

class Drawerpage extends Component {
    renderLogo() {
        return (
            <View>
                <TouchableOpacity
                    //style={styles.menuIconContainer}
                    onPress={() => this.props.navigation.closeDrawer()}
                >
                    <Text style={{ color: 'white' }}>close menu</Text>
                </TouchableOpacity>


            </View>
        );
    }
    Demo() {
        return (
            <View>
                <TouchableOpacity
                    //style={styles.menuIconContainer}
                    onPress={() => this.props.navigation.navigate('Demopage')}
                >
                    <Text style={{ color: 'white' }}>Demo</Text>
                </TouchableOpacity>


            </View>
        );
    }
    renderAboutUs() {
        return (
            <View>
                <TouchableOpacity
                    //style={styles.menuIconContainer
                    onPress={() => this.props.navigation.navigate('AboutPage')}
                >
                    <Text style={{ color: 'white' }}>AboutPage</Text>
                </TouchableOpacity>


            </View>
        );
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'gray' }}>
                <View style={{ padding: 20 }} >
                    {this.renderLogo()}
                    {this.Demo()}
                    {this.renderAboutUs()}
                </View>
            </View>
        )
    }
}
export default Drawerpage