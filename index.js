/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Tabs from './src/navigator/Tabs';

AppRegistry.registerComponent(appName, () => Tabs);
