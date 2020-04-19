import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList, View, Text } from 'react-native';
import { fetchSidebarData } from '../../actionCreators/sidebar';
import styles from './Styles';

function Item({ name, route, navigation }) {
    return (
        <View style={styles.item}>
            <Text style={styles.title} onPress={() => {
                navigation.navigate(route, { screenName: name });
                navigation.closeDrawer();
            }}>{name}</Text>
        </View>
    );
}

function Sidebar(props) {
    const { navigation } = props;
    const sidebarState = useSelector(state => state.sidebar);
    const { sidebarData } = sidebarState;
    const dispatch = useDispatch();

    useEffect(() => {
        if (!sidebarData) {
            dispatch(fetchSidebarData());
        }
    }, []);

    return (
        <FlatList
            data={sidebarData}
            renderItem={({ item }) => <Item name={item.name} route={item.route} navigation={navigation} />}
            keyExtractor={(item, index) => index.toString()}
        />
    );
}

export default Sidebar;