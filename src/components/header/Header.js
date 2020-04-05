import React from 'react';
import { View, Button } from 'react-native';

function Header(props) {
    return (
        <View>
            <Button
                title="Open"
                onPress={() => {
                    props.navigation.openDrawer()
                }}
            />
        </View>
    );
}

export default Header;