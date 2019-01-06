import { createStackNavigator } from 'react-navigation';

import SettingsScreen from '../screens/SettingsScreen';

const SettingsStack = createStackNavigator(
  {
    Settings: {
      screen: SettingsScreen
    }
  },
  {
    initialRouteName: 'Settings'
  }
);
export default SettingsStack;
