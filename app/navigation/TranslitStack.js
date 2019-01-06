import { createStackNavigator } from 'react-navigation';

import TranslitScreen from '../screens/TranslitScreen';

const TranslitStack = createStackNavigator(
  {
    Translit: {
      screen: TranslitScreen
    }
  },
  {
    initialRouteName: 'Translit'
  }
);
export default TranslitStack;
