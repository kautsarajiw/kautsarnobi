import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {Animated, Easing} from 'react-native';

//import Screen Login
import Root from '../Pages/Root';
import Login from '../Pages/Login/Login';

//import Dashboard Screen
import Main from '../Pages/Main/Main';

//Login Navigation
const LoginStackNavigation = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
);

//Main Navigation
const MainStackNavigation = createStackNavigator(
  {
    Home: {
      screen: Main,
      navigationOptions: {
        headerShown: false,
        animationEnabled:false,
      },
    }, 
  },
);

export default createAppContainer(createSwitchNavigator(
  {
    Root: Root, //for logic state
    Login: LoginStackNavigation,
    Main: MainStackNavigation,
  },
  {
    initialRouteName: 'Root',
  },
));
