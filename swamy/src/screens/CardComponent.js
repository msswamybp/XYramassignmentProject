import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native'
class CardComponent extends Component {


    render() {
        return (
            <View style={{ flex: 1 }}>

                <View style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }} >
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('HomeDetaile')
                        }}>
                        <Image
                            source={{
                                uri: this.props.resource
                            }}
                            style={{ width: 400, height: 400 }} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
export default CardComponent