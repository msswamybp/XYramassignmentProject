import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import Childtoparent from './Childtoparent'
import LifeCycalMethod from './LifeCycalMethod'
import Cat from './FunctionalComponent'
import HigherOrderComponet from './HigherOrderComponet'
class ParentTOchild extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'shiva'
        }
    }

    parentMethod(name) {
        this.setState({ name: name + 'a' })
        //  alert(name)
    }
    render() {
        return (
            <View>
                <Childtoparent
                    name={this.state.name}
                    parentMethod={this.parentMethod.bind(this)}
                />
                <LifeCycalMethod
                    name={this.state.name} />
                <Button
                    title="Press me"
                    onPress={() => this.parentMethod('shiva')}
                />
                <Cat
                    name={this.state.name}
                />
            </View>
        )
    }
}
export default ParentTOchild