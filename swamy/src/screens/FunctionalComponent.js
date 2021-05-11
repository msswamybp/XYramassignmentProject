import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { Text } from 'react-native';

const Cat = (props) => {

    useEffect(() => {
        console.log('functional componentDidmount');

    }, []);
    useEffect(() => {
        return () => {
            console.log('functional componentWillUnmount');
        }
    }, [props.name]);

    useEffect(() => {
        console.log('functional Componentdidupdate');

    }, []);
    return (
        <Text>{props.name}</Text>
    );
}

function map(state) {
    return {

    }
}
export default connect(map)(Cat);