import React, { Component } from "react";
import { View, Text, TouchableOpacity } from 'react-native'
class CardComponent extends CardComponent {
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps');

    }

    render() {
        return (
            <View style={{ flex: 1 }}>

                <View style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }} >
                    <TouchableOpacity
                        onPress={() => {
                            //  this.props.navigation.navigate('Homepage')
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
export default CardComponent