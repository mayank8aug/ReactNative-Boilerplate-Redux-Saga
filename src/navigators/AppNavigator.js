import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Drawer from './Drawer';
import Home from '../components/home/Home';
import Login from '../components/login/Login';
import ContactUs from '../components/contact/ContactUs';
import WebView from '../components/webview/WebView';

const Navigator = createStackNavigator(
  {
    Drawer: { screen: Drawer },
    Home: { screen: Home },
    Login: { screen: Login },
    ContactUs: { screen: ContactUs },
    WebView: { screen: WebView }
  },
  {
    initialRouteName: 'Drawer',
    headerMode: 'none'
  }
);

const AppNavigator = createAppContainer(Navigator);

export default AppNavigator;