import React, { Component } from "react";
import { View, Text, TouchableOpacity } from 'react-native'
import { DrawerActions } from 'react-navigation-drawer';
class Homepage extends Component {
    state = {
        arr: [],
        count: 1
    };
    componentWillMount() {
        console.log('componentWillMount');

    }
    render() {
        console.log('render');

        return (
            <View style={{ flex: 1 }}>
                {this.renderLeftButton()}
                <View style={{ alignItems: 'center', justifyContent: 'center', }} >
                    <TouchableOpacity onPress={this.increaseCount}>
                        <Text>Increase</Text>
                    </TouchableOpacity>
                    <Text >
                        {this.state.count}
                    </Text>
                    <TouchableOpacity onPress={this.decreaseCount}>
                        <Text>Decrease</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('HomeDetaile', { count: this.state.count })
                    }}>
                    <Text style={{ fontSize: 30 }}>
                        home
                        </Text>
                </TouchableOpacity>
            </View>

        )
    }
    componentDidMount() {
        console.log('componentDidMount');

    }
    componentDidUpdate() {
        if (this.state.count === 5) {
            console.log('componentDidUpdate');
        }

    }

    componentWillReceiveProps() {
        console.log('componentWillReceiveProps', this.props);

    }
    componentWillUnmount() {
        console.log('componentWillUnmount');

    }

    rendernum() {

    }
    increaseCount = () => {
        this.setState({ count: this.state.count + 1 })
    }
    decreaseCount = () => {
        this.setState({ count: this.state.count - 1 })
    }
    renderLeftButton() {
        return (
            <View style={{ flexDirection: 'row' }}>


                <TouchableOpacity
                    //style={styles.menu_icon}
                    // hitSlop={{ top: slop, left: slop, right: slop, bottom: slop }}
                    onPress={() => {
                        //this.props.navigation.toggleDrawer();
                        this.props.navigation.dispatch(DrawerActions.openDrawer());
                        //this.props.navigation.openDrawer();

                    }}
                >
                    <Text style={{ fontSize: 20 }}>sidemenu</Text>
                </TouchableOpacity>

            </View>
        );
    }


}
export default Homepage