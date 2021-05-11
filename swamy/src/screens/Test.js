// import { NativeModules } from 'react-native';
// NativeModules.Device.getDeviceName((err, name) => {
//     console.log(err, name);
//     // alert(err, name)
// });
import React from 'react';
import { NativeModules, Button } from 'react-native';

const Test = () => {
    const onPress = () => {
        NativeModules.Device.getDeviceName((err, name) => {
            // console.log(err, name);
            alert(err, name)
        });
        console.log('We will invoke the native module here!');
    };

    return (
        <Button
            title="Click to invoke your native module!"
            color="#841584"
            onPress={onPress}
        />
    );
};

export default Test;