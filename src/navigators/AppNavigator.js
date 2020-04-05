import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Drawer from './Drawer';
import Home from '../components/home/Home';
import Login from '../components/login/Login';
import ContactUs from '../components/contact/ContactUs';

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