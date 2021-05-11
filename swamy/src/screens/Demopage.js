import React, { Component } from "react";
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'
class Demopage extends Component {
    componentDidMount() {
        alert(this.props.conter)
    }
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
                    <TouchableOpacity
                        onPress={() => {
                            this.props.decrement()
                            // this.props.navigation.navigate('Homepage')
                        }}>
                        <Text style={{ fontSize: 30 }}>
                            {this.props.conter}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
function mapstateprops(state) {
    return {
        conter: state.counter
    }
}
function mapDispachToProps(dispach) {
    return {
        increment: () => dispach({ type: 'INCRE' }),
        decrement: () => dispach({ type: 'DEC' }),

    }
}
export default connect(mapstateprops, mapDispachToProps)(Demopage)