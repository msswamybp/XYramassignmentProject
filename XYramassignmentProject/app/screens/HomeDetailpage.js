
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
    ScrollView,
    TouchableOpacity

} from 'react-native';

import Images from './../config/images';
import images from './../config/images';

class HomeDetailpage extends Component {

    get_address() {
        var address = ""
        var data = this.props.navigation.state.params.resource['address'][0]
        if (data.line[0] != undefined) {
            address = address + " " + data.line[0]
        }
        if (data.city != undefined) {
            address = address + " " + data.city
        }
        if (data.state != undefined) {
            address = address + " " + data.state
        }
        if (data.country != undefined) {
            address = address + " " + data.country
        }
        if (data.postalCode != undefined) {
            address = address + " " + data.postalCode
        }


        return address
    }

    isalive() {
        var data = this.props.navigation.state.params.resource['active']
        if (data !== undefined) {
            return "yes"
        }
        else {
            return "no"
        }
    }
    render() {
        return (
            <View style={{
                flex: 1,
            }}>
                <View style={{ flexDirection: 'row', }}>
                    <View style={{ paddingLeft: Dimensions.get('window').width * 0.06, alignSelf: 'flex-start', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Homepage')}>
                            <Image
                                style={{
                                    height: Dimensions.get('window').height * 0.06,
                                    width: Dimensions.get('window').width * 0.06,
                                    resizeMode: 'contain',
                                    alignSelf: 'center'
                                }}
                                source={images.backbutton} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingLeft: Dimensions.get('window').width * 0.09, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontWeight: 'bold' }}>
                            Patient Details
                    </Text>
                    </View>
                </View>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                    }}
                />
                <View style={{ flexDirection: 'row', padding: 20 }}>
                    <Text>Family Name : </Text>
                    <Text style={{ fontWeight: 'bold' }}>{this.props.navigation.state.params.family}</Text>
                </View>
                <View style={{ flexDirection: 'row', padding: 20 }}>
                    <Text>Given Name : </Text>
                    <Text style={{ fontWeight: 'bold' }}>{this.props.navigation.state.params.name}</Text>
                </View>
                <View style={{ flexDirection: 'row', padding: 20 }}>
                    <Text>Gender : </Text>
                    <Text style={{ fontWeight: 'bold' }}>{this.props.navigation.state.params.gender}</Text>
                </View>
                <View style={{ flexDirection: 'row', padding: 20 }}>
                    <Text>Age : </Text>
                    <Text style={{ fontWeight: 'bold' }}>{this.props.navigation.state.params.age}</Text>
                </View>
                <View style={{ flexDirection: 'row', padding: 20 }}>
                    <Text>Birth Date : </Text>
                    <Text style={{ fontWeight: 'bold' }}>{this.props.navigation.state.params.birthDate}</Text>
                </View>
                <View style={{ flexDirection: 'row', padding: 20 }}>
                    <Text>Address : </Text>
                    <Text style={{ fontWeight: 'bold' }}>{this.get_address()}</Text>
                </View>
                <View style={{ flexDirection: 'row', padding: 20 }}>
                    <Text>telecom : </Text>
                    <Text style={{ fontWeight: 'bold' }}>{this.props.navigation.state.params.telecom}</Text>
                </View>
                <View style={{ flexDirection: 'row', padding: 20 }}>
                    <Text>Alive : </Text>
                    <Text style={{ fontWeight: 'bold' }}>{this.isalive()}</Text>
                </View>
                <View style={{ flexDirection: 'row', padding: 20 }}>
                    <Text>Identifier : </Text>
                    <Text style={{ fontWeight: 'bold' }}>{this.props.navigation.state.params.resource['id']}</Text>
                </View>
                <View style={{ flexDirection: 'row', padding: 20 }}>
                    <Text>LastUpdated : </Text>
                    <Text style={{ fontWeight: 'bold' }}>{this.props.navigation.state.params.resource['meta'].lastUpdated}</Text>
                </View>
            </View>
        );
    }
}

export default HomeDetailpage