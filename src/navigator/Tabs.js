import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../components/HomeScreen';
import SettingScreen from '../components/SettingScreen';
import {IconView} from '../components/custom/CustomComponent';

const Tab = createBottomTabNavigator();
export default Tabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarStyle:{backgroundColor:'#52D6FA'},
          tabBarIcon: ({focused}) => {
            if (route.name === 'Home') {
              return (
                <IconView
                  image={
                    focused
                      ? require('../assets/images/home.png')
                      : require('../assets/images/home1.png')
                  }
                />
              );
            } else if (route.name === 'Setting') {
              return (
                <IconView
                  image={
                    focused
                      ? require('../assets/images/settings.png')
                      : require('../assets/images/settings1.png')
                  }
                />
              );
            }
          },
          headerShown: false,
          tabBarLabel: () => {
            return null;
          },
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Setting" component={SettingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
