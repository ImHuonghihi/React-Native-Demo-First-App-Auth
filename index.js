/**
 * @format
 */

import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';

// import { WelcomeScreen, Login, Register, FoodList, ProductGridView, Setting } from './screens';

// import  UITab  from './navigation/UITab';

import App from './navigation/App'

AppRegistry.registerComponent(appName,
  () => () => <App/>);




