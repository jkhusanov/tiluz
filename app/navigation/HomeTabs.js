import React from 'react';
import { Platform } from 'react-native';

import { createBottomTabNavigator } from 'react-navigation';
import { SimpleLineIcons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

import TranslitStack from './TranslitStack';
import SettingsStack from './SettingsStack';

const HomeTabs = createBottomTabNavigator(
  {
    TranslitTab: {
      screen: TranslitStack,
      navigationOptions: {
        tabBarLabel: 'Oʻgirish',
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons
            name="clipboard-text"
            color={tintColor}
            size={Platform.OS === 'ios' ? 23 : 25}
          />
        )
      }
    },
    SettingsTab: {
      screen: SettingsStack,
      navigationOptions: {
        tabBarLabel: 'Sozlamalar',
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons
            name="settings"
            color={tintColor}
            size={Platform.OS === 'ios' ? 23 : 25}
          />
        )
      }
    }
  },
  {
    initialRouteName: 'TranslitTab',
    tabBarPosition: 'bottom',
    animationEnabled: Platform.OS === 'ios' ? false : true,
    swipeEnabled: Platform.OS === 'ios' ? false : false,
    tabBarOptions: {
      showIcon: true,
      showLabel: true,
      activeTintColor: '#374FF5',
      inactiveTintColor: '#393e46',
      style: {
        backgroundColor: '#ffffff',
        padding: Platform.OS === 'ios' ? 5 : 0
      },
      indicatorStyle: {
        backgroundColor: 'white'
      },
      labelStyle: {
        fontSize: 12
      }
    }
  }
);

export default HomeTabs;
