import React, { Component } from 'react'
import { View, Text } from 'react-native'
import HigherOrderComponet from './HigherOrderComponet'
class LifeCycalMethod extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'shiva',
            componentCrashed: false
        }
    }
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', nextProps);

    }
    componentWillUpdate() {
        console.log('componentWillUpdate');

    }
    shouldComponentUpdate() {
        return true

    }
    getSnapshotBeforeUpdate() {

    }
    render() {
        //   if (this.state.componentCrashed) {
        return (
            <View>
                <Text>
                    Error in component "SingUpInit"
                    </Text>
            </View>
        );
        // }
    }
    componentDidMount() {
        alert(this.props.god)
        console.log('componentDidMount', this.state.name);

    }
    componentDidUpdate() {
        console.log('componentDidUpdate');

    }
    componentWillUnmount() {
        console.log('FunctionalComponet Componentunmount');

    }
    componentDidCatch(error, info) {
        console.log('componentDidCatch', error);
        console.log('componentDidCatch', info);

    }
}
export default (HigherOrderComponet)(LifeCycalMethod)