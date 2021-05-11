import React, { Component } from 'react'
import { View, Text } from 'react-native'
function HigherOrderComponet(Compenent1) {
    return class Hoc extends Component {
        constructor(props) {
            super(props)
            this.state = {
                god: 'om namaha shivaya'
            }
        }
        add() {
            return 1 + 2
        }
        render() {
            return (<Compenent1
                god={this.state.god} />
            )
        }
    }
}
export default HigherOrderComponet