import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import InitialLanguageScreen from 'app/screens/onboarding/InitialLanguageScreen';
import WelcomeScreen from 'app/screens/onboarding/WelcomeScreen';

const Stack = createStackNavigator();

const WelcomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="InitialLanguage"
        component={InitialLanguageScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};
export default WelcomeStack;
