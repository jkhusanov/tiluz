import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import COLORS from '@constants/colors';

import TranslitStackScreen from './TranslitStackScreen';
import SettingsStackScreen from './SettingsStackScreen';

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'TranslitTab') {
            iconName = focused ? 'clipboard-text' : 'clipboard-text';
          } else if (route.name === 'SettingsTab') {
            iconName = focused ? 'settings' : 'settings';
          }

          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: COLORS.mainBlue,
        inactiveTintColor: COLORS.greyTwo,
        indicatorStyle: {
          backgroundColor: 'white',
        },
        labelStyle: {
          fontSize: 12,
        },
        style: {
          backgroundColor: COLORS.white,
        },
      }}
    >
      <Tab.Screen name="TranslitTab" component={TranslitStackScreen} />
      <Tab.Screen name="SettingsTab" component={SettingsStackScreen} />
    </Tab.Navigator>
  );
};

export default HomeTabs;
