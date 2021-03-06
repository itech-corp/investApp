import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from '_scenes/login';
import SignUpScreen from '_scenes/signUp';
import GuestUpScreen from '_scenes/guest';
import SuccessScreen from '_scenes/success';

const AuthNavigatorConfig = {
  initialRouteName: 'Login',
  header: null,
  headerMode: 'none',
};

const RouteConfigs = {
  Login:LoginScreen,
  SignUp:SignUpScreen,
  Guest:GuestUpScreen,
  Success:SuccessScreen
};

const AuthNavigator = createStackNavigator(RouteConfigs, AuthNavigatorConfig);

export default AuthNavigator;