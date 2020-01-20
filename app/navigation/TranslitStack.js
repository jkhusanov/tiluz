import { createStackNavigator } from 'react-navigation-stack';

import TranslitScreen from '../screens/TranslitScreen';

const TranslitStack = createStackNavigator(
  {
    Translit: {
      screen: TranslitScreen,
    },
  },
  {
    initialRouteName: 'Translit',
  }
);
export default TranslitStack;
