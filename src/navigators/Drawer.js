import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Home from '../components/home/Home';
import SideBar from '../components/sidebar/Sidebar';
import Login from '../components/login/Login';
import ContactUs from '../components/contact/ContactUs';

const Drawer = createDrawerNavigator(
    {
        Home: { screen: Home },
        Login: { screen: Login },
        ContactUs: { screen: ContactUs }
    },
    {
        initialRouteName: 'Home',
        contentOptions: {
            activeTintColor: '#e91e63'
        },
        drawerPosition: 'left',
        drawerBackgroundColor: '#1c1d1d',
        contentComponent: props => <SideBar {...props} />
    }
);

export default Drawer;