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

class GridCardComponent extends Component {

    render() {
        var im = this.props.name
        return (
            <View
                style={{
                    height: Dimensions.get('window').height * 0.25, width: Dimensions.get('window').width * 0.75

                }}>

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('HomeDetailpage', {
                        name: this.props.name,
                        images: this.props.images,
                        des: this.props.des
                    })}>
                    {/* <Image source={require('./../assets/Kirik_Party.jpg')} /> */}
                    <Image
                        style={{
                            height: Dimensions.get('window').height * 0.25,
                            width: Dimensions.get('window').width * 0.75,
                            //resizeMode: 'contain',
                            alignSelf: 'center'
                        }}
                        source={this.props.images} />
                </TouchableOpacity>

               
            </View>
        )
    }
}
export default GridCardComponent