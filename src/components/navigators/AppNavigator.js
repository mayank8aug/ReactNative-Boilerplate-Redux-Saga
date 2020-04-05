import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Drawer from './Drawer';
import Home from '../home/Home';
import Login from '../login/Login';
import ContactUs from '../contact/ContactUs';

const Navigator = createStackNavigator(
  {
    Drawer: { screen: Drawer },
    Home: { screen: Home },
    Login: { screen: Login },
    ContactUs: { screen: ContactUs }
  },
  {
    initialRouteName: 'Drawer',
    headerMode: 'none'
  }
);

const AppNavigator = createAppContainer(Navigator);

export default AppNavigator;