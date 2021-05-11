import React, { Component } from 'react'
import { View, Text } from 'react-native'
class Childtoparent extends Component {
    componentDidMount() {
        this.props.parentMethod('om namaha shivaya')
    }
    render() {
        return (
            <View>
                <Text > {this.props.name}</Text>
            </View>
        )
    }
}
export default Childtoparent