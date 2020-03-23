import React, { useContext } from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import COLORS from '@constants/colors';
import LanguageContext from '@store/LanguageContext';

import TranslitStackScreen from './TranslitStackScreen';
import SettingsStackScreen from './SettingsStackScreen';

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  const languageContext = useContext(LanguageContext);
  const { t } = languageContext;

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
        keyboardHidesTabBar: Platform.OS === 'android',
      }}
    >
      <Tab.Screen
        name="TranslitTab"
        component={TranslitStackScreen}
        options={{ tabBarLabel: t('NAVIGATION.TRANSLIT_TAB') }}
      />
      <Tab.Screen
        name="SettingsTab"
        component={SettingsStackScreen}
        options={{ tabBarLabel: t('NAVIGATION.SETTINGS_TAB') }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabs;
