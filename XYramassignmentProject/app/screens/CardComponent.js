import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    ActivityIndicator,
    ImageBackground,
    BackHandler,
    Dimensions,
    SafeAreaView,
    TouchableOpacity

} from 'react-native';
import Images from './../config/images';
import images from './../config/images';

class CardComponent extends Component {

    render() {
        console.log('this.props.', this.props.resource);

        return (
            <View
                style={{
                    height: Dimensions.get('window').height * 0.075, width: Dimensions.get('window').width,

                }}>

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('HomeDetailpage', {
                        name: this.props.name,
                        resource: this.props.resource,
                        id: this.props.id,
                        family: this.props.family,
                        gender: this.props.gender,
                        age: this.props.age,
                        name: this.props.name,
                        birthDate: this.props.birthDate,
                        telecom: this.props.telecom

                    })}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Text>{this.props.name}</Text>
                        <Text>{this.props.age}</Text>
                        <Text>{this.props.gender}</Text>

                    </View>

                </TouchableOpacity>

                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                    }}
                />
            </View >
        )
    }
}
export default CardComponent