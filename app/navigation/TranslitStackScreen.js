import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import COLORS from '@constants/colors';
import TranslitScreen from 'app/screens/translit/TranslitScreen';

const TranslitStack = createStackNavigator();

const TranslitStackScreen = () => {
  return (
    <TranslitStack.Navigator>
      <TranslitStack.Screen
        name="Translit"
        component={TranslitScreen}
        options={{
          headerTitle: 'Tiluz',
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
    </TranslitStack.Navigator>
  );
};
export default TranslitStackScreen;
