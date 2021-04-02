import React, { Component } from "react";
import { View, Text, TouchableOpacity } from 'react-native'
class Demopage extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>

                <View style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }} >
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('Homepage')
                        }}>
                        <Text style={{ fontSize: 30 }}>
                            demo page
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
export default Demopage