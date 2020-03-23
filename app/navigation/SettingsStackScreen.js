import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import COLORS from '@constants/colors';
import LanguageContext from '@store/LanguageContext';

import SettingsScreen from 'app/screens/settings/SettingsScreen';
import LanguageScreen from 'app/screens/settings/LanguageScreen';

const SettingsStack = createStackNavigator();

const SettingsStackScreen = () => {
  const languageContext = useContext(LanguageContext);
  const { t } = languageContext;

  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerTitle: t('NAVIGATION.SETTINGS'),
          headerTintColor: 'white',
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: COLORS.mainBlue,
            borderBottomWidth: 0.5,
            borderBottomColor: COLORS.greyOne,
          },
        }}
      />
      <SettingsStack.Screen
        name="Language"
        component={LanguageScreen}
        options={{
          headerTitle: t('NAVIGATION.APP_LANGUAGE'),
          headerTintColor: 'white',
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: COLORS.mainBlue,
            borderBottomWidth: 0.5,
            borderBottomColor: COLORS.greyOne,
          },
        }}
      />
    </SettingsStack.Navigator>
  );
};
export default SettingsStackScreen;
