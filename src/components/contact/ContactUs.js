import React from 'react';
import { View, Text } from 'react-native';
import Header from '../header/Header';

function ContactUs(props) {
    return (
        <>
            <Header navigation={props.navigation} />
            <View>
                <Text>Contact Us page will render here</Text>
            </View>
        </>
    )
}

export default ContactUs;