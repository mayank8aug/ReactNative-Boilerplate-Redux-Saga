import React from 'react';
import { View, Text } from 'react-native';
import Header from '../header/Header';

function Home(props) {
    return (
        <>
            <Header navigation={props.navigation} />
            <View>
                <Text>Home page will render here</Text>
            </View>
        </>
    )
}

export default Home;