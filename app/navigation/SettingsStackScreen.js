import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import COLORS from '@constants/colors';

import SettingsScreen from 'app/screens/SettingsScreen';

const SettingsStack = createStackNavigator();

const SettingsStackScreen = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerTitle: 'Sozlamalar',
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
