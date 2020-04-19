import React from 'react';
import { View, Text } from 'react-native';
import Header from '../header/Header';

function Login(props) {
    const paramValue = props.navigation.getParam('screenName', null);
    return (
        <>
            <Header navigation={props.navigation} />
            <View>
                <Text>Login page will render here</Text>
                {paramValue && <Text>The navigation param screenName value is {paramValue}</Text>}
            </View>
        </>
    )
}

export default Login;