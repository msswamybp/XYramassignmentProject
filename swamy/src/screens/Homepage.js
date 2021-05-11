// import React, { Component } from "react";
// import { connect } from 'react-redux'
// import Test from './Test'
// import { View, Text, TouchableOpacity, TextInput, BackHandler, ScrollView } from 'react-native'
// import { DrawerActions } from 'react-navigation-drawer';
// class Homepage extends Component {
//     state = {
//         arr: [],
//         count: 1
//     };
//     constructor(props) {
//         super(props)
//         this.state = {

//             address: ''
//         }
//     }

//     componentWillMount() {
//         BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
//     }
//     componentWillUnmount() {
//         BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
//     }
//     handleBackButtonClick() {
//         BackHandler.exitApp();
//         return true;
//     }
//     render() {


//         return (
//             <View style={{ flex: 1 }}>
//                 <Test />
//                 {this.renderLeftButton()}
//                 <View style={{ alignItems: 'center', justifyContent: 'center', }} >
//                     <TouchableOpacity onPress={this.increaseCount}>
//                         <Text>Increase</Text>
//                     </TouchableOpacity>
//                     <Text >
//                         {this.state.count}
//                     </Text>
//                     <TouchableOpacity onPress={this.decreaseCount}>
//                         <Text>Decrease</Text>
//                     </TouchableOpacity>
//                 </View>
//                 <View style={{  alignItems:'flex-end'}}>
//                     <View style={{ paddingBottom: 50, backgroundColor: "red", height: 20, width: 20 }} />
//                     <View style={{margin:50, backgroundColor: "darkorange", height: 20, width: 20 }} />
//                     <View style={{ backgroundColor: "green", height: 20, width: 20 }} />
//                 </View>
//                 <TouchableOpacity
//                     onPress={() => {
//                         this.props.increment()
//                         // this.props.navigation.navigate('HomeDetaile', { count: this.state.count })
//                     }}>
//                     <Text style={{ fontSize: 30 }}>
//                         Increase
//                     </Text>
//                 </TouchableOpacity>
//                 {/* <TextInput
//                     ref={ref => { this._inputElement = ref }}
//                     autoFocus={true}

//                     style={{ height: 300, width: 100 }}
//                     placeholder="Search for modules"
//                     placeholderTextColor='#224842'
//                     onChangeText={address => this.setState({ address })}
//                     value={this.state.address}

//                 /> */}
//                 <View>
//                     <Text style={{ fontSize: 30 }}>
//                         {this.props.cont}
//                     </Text>
//                 </View>
//                 <TouchableOpacity
//                     onPress={() => {
//                         this.props.decrement()
//                         // this.props.navigation.navigate('HomeDetaile', { count: this.state.count })
//                     }}>
//                     <Text style={{ fontSize: 30 }}>
//                         Decrease
//                     </Text>
//                 </TouchableOpacity>
//                 <View style={{ bottom: 0, position: 'absolute', elevation: 3 }}>
//                     {/* <TextInput
//                         ref={ref => { this._inputElement = ref }}
//                         autoFocus={true}

//                         style={{ height: 300, width: 100 }}
//                         placeholder="Search for modules"
//                         placeholderTextColor='#224842'
//                         onChangeText={address => this.setState({ address })}
//                         value={this.state.address}

//                     /> */}
//                 </View>
//                 <View style={{ bottom: 0, position: 'absolute' }}>
//                     <TouchableOpacity
//                         onPress={() => {
//                             this.props.decrement()
//                             // this.props.navigation.navigate('HomeDetaile', { count: this.state.count })
//                         }}>
//                         <Text style={{ fontSize: 30 }}>
//                             Decrease
//                     </Text>
//                     </TouchableOpacity>
//                 </View>

//             </View>

//         )
//     }
//     addAddress(event, result) {
//         // I always check to make sure that the ref exists
//         if (this._inputElement) {
//             console.log("reference:", this._inputElement._lastNativeText);
//         }
//     }
//     componentDidMount() {

//         console.log('componentDidMount');

//     }
//     componentDidUpdate() {
//         if (this.state.count === 5) {
//             console.log('componentDidUpdate');
//         }

//     }

//     componentWillReceiveProps() {
//         console.log('componentWillReceiveProps', this.props);

//     }

//     rendernum() {

//     }
//     increaseCount = () => {
//         this.setState({ count: this.state.count + 1 })
//     }
//     decreaseCount = () => {
//         this.setState({ count: this.state.count - 1 })
//     }
//     renderLeftButton() {
//         return (
//             <View style={{ flexDirection: 'row' }}>


//                 <TouchableOpacity
//                     //style={styles.menu_icon}
//                     // hitSlop={{ top: slop, left: slop, right: slop, bottom: slop }}
//                     onPress={() => {
//                         //this.props.navigation.toggleDrawer();
//                         this.props.navigation.dispatch(DrawerActions.openDrawer());
//                         //this.props.navigation.openDrawer();

//                     }}
//                 >
//                     <Text style={{ fontSize: 20 }}>sidemenu</Text>
//                 </TouchableOpacity>

//             </View>
//         );
//     }


// }
// function mapstatetoprops(state) {
//     return {
//         cont: state.counter
//     }
// }
// function mapDispachToProps(dispach) {
//     return {
//         increment: () => dispach({ type: 'INCRE' }),
//         decrement: () => dispach({ type: 'DEC' }),

//     }
// }
// export default connect(mapstatetoprops, mapDispachToProps)(Homepage)
// // import React, { Component } from 'react';
// // import PropTypes from 'prop-types';
// // import {
// //     Alert,
// //     Image,
// //     Text,
// //     TouchableOpacity,
// //     View,
// //     ViewPropTypes,
// //     Platform,
// // } from 'react-native';

// // import FingerprintScanner from 'react-native-fingerprint-scanner';
// // import styles from './FingerprintPopup.component.styles';
// // import ShakingText from './ShakingText';



// // Based on https://github.com/hieuvp/react-native-fingerprint-scanner/blob/master/examples/src/FingerprintPopup.component.android.js
// // - this example component supports both the legacy device-specific (Android < v23) and
// //   current (Android >= 23) biometric APIs
// // - your lib and implementation may not need both
// // class Homepage extends Component {
// //     constructor(props) {
// //         super(props);
// //         this.state = {
// //             errorMessageLegacy: undefined,
// //             biometricLegacy: undefined
// //         };

// //         this.description = null;
// //     }

// //     componentDidMount() {
// //         if (this.requiresLegacyAuthentication()) {
// //             this.authLegacy();
// //         } else {
// //             this.authCurrent();
// //         }
// //     }

// //     componentWillUnmount = () => {
// //         FingerprintScanner.release();
// //     }

// //     requiresLegacyAuthentication() {
// //         return Platform.Version < 23;
// //     }

// //     authCurrent() {
// //         alert(this.props.description)
// //         FingerprintScanner
// //             .authenticate({ description: this.props.description || 'Log in with Biometrics' })
// //             .then(() => {
// //                 Alert.alert('Fingerprint Authentication', 'Authenticated successfully');
// //             })
// //             .catch((error) => {
// //                 Alert.alert('Fingerprint Authentication', error.message);
// //             });
// //     }

// //     authLegacy() {
// //         FingerprintScanner
// //             .authenticate({ onAttempt: this.handleAuthenticationAttemptedLegacy })
// //             .then(() => {
// //                 this.props.handlePopupDismissedLegacy();
// //                 Alert.alert('Fingerprint Authentication', 'Authenticated successfully');
// //             })
// //             .catch((error) => {
// //                 this.setState({ errorMessageLegacy: error.message, biometricLegacy: error.biometric });
// //                 this.description.shake();
// //             });
// //     }

// //     handleAuthenticationAttemptedLegacy = (error) => {
// //         this.setState({ errorMessageLegacy: error.message });
// //         this.description.shake();
// //     };

// //     renderLegacy() {
// //         const { errorMessageLegacy, biometricLegacy } = this.state;
// //         const { style, handlePopupDismissedLegacy } = this.props;

// //         return (
// //             <View style={styles.container}>
// //                 <View style={[styles.contentContainer, style]}>

// //                     <Image
// //                         style={styles.logo}
// //                         source={require('./../asset/finger_print.png')}
// //                     />

// //                     <Text style={styles.heading}>
// //                         Biometric{'\n'}Authentication
// //           </Text>
// //                     <ShakingText
// //                         ref={(instance) => { this.description = instance; }}
// //                         style={styles.description(!!errorMessageLegacy)}>
// //                         {errorMessageLegacy || `Scan your ${biometricLegacy} on the\ndevice scanner to continue`}
// //                     </ShakingText>

// //                     <TouchableOpacity
// //                         style={styles.buttonContainer}
// //                         onPress={handlePopupDismissedLegacy}
// //                     >
// //                         <Text style={styles.buttonText}>
// //                             BACK TO MAIN
// //             </Text>
// //                     </TouchableOpacity>

// //                 </View>
// //             </View>
// //         );
// //     }


// //     render = () => {
// //         if (this.requiresLegacyAuthentication()) {
// //             return this.renderLegacy();
// //         }

// //         // current API UI provided by native BiometricPrompt
// //         return null;
// //     }
// // }

// // Homepage.propTypes = {
// //     description: PropTypes.string,
// //     handlePopupDismissedLegacy: PropTypes.func,
// //     style: ViewPropTypes.style,
// // };

// // export default Homepage;
import React, { PureComponent, Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from 'react-native';
import { RNCamera } from 'react-native-camera';
import CardComponent from './CardComponent'
import { DocumentDirectoryPath, LibraryDirectoryPathz } from "react-native-fs";
const RNFS = require("react-native-fs");
let parentPath =
    Platform.OS === "ios" ? LibraryDirectoryPath : DocumentDirectoryPath;
const PendingView = () => (
    <View
        style={{
            flex: 1,
            backgroundColor: 'lightgreen',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        <Text>Waiting</Text>
    </View>
);
var arr1 = []
export default class Homepage extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            image: null,
            arr: []
        }
    }
    // async  componentDidMount() {
    //     var data = "/images"
    //     var path = parentPath + data;
    //     var a = await this.yyyyy()
    //     console.log(a);


    // }
    async takePicture1(camera) {
        //  var data = await takePicture(camera, this.props.navigation)
        const options = { quality: 0.5, base64: true };
        var data = await camera.takePictureAsync(options);
        //console.log(data.uri);
        var decode = "data:image/png;base64," + data.base64
        this.setState({ image: decode })
        //var path = parentPath + DOWNLOADED_FILE_DIRECTORY + "image",

        var today = new Date();
        var date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate()

        var date1 = "" + date
        var path = parentPath + "/image" + date1
        var temp = {
            date: date1,
            data: "data:image/png;base64," + data.base64,
            uri: data.uri
        }
        arr1.push(temp)
        // RNFS.writeFile(path)
        // var bol = await this.yyyyy()
        console.log(arr1);
        //this.props.navigation.navigate('HomeDetaile', { uri: this.state.image })

    }
    // async yyyyy111() {

    //     return await RNFS.writeFile(parentPath + "/image123")
    // }
    // async yyyyy() {

    //     return await RNFS.writeFile(parentPath + "/image123")
    // }
    test() {
        if (arr1.length > 0) {
            return (
                <View >
                    <FlatList
                        horizontal={true}

                        keyExtractor={(item, index) => index.toString()}
                        data={arr1}
                        renderItem={({ item, index }) => {
                            return (
                                <CardComponent
                                    resource={item.data}
                                    navigation={this.props.navigation}
                                />
                            );
                        }}
                    />
                </View>
            )
        }
        else {
            return null
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <RNCamera
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    androidRecordAudioPermissionOptions={{
                        title: 'Permission to use audio recording',
                        message: 'We need your permission to use your audio',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                >
                    {({ camera, status, recordAudioPermissionStatus }) => {
                        if (status !== 'READY') return <PendingView />;
                        return (
                            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                                <TouchableOpacity onPress={() => this.takePicture1(camera, this.props.navigation)} style={styles.capture}>
                                    <Text style={{ fontSize: 14 }}> SNAP </Text>
                                </TouchableOpacity>

                            </View>
                        );
                    }}
                </RNCamera>
                {this.test()}
            </View>
        );

    }

    takePicture = async function (camera, navigation) {
        const options = { quality: 0.5, base64: true };
        return await camera.takePictureAsync(options);
        //  eslint-disable-next-line



    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
});
