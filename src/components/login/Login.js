import React from 'react';
import { View, Text } from 'react-native';
import Header from '../header/Header';

function Login(props) {
    return (
        <>
            <Header navigation={props.navigation} />
            <View>
                <Text>Login page will render here</Text>
            </View>
        </>
    )
}

export default Login;