import { createStackNavigator } from 'react-navigation';

import WelcomeScreen from '../screens/WelcomeScreen';

const WelcomeStack = createStackNavigator({
  Welcome: {
    screen: WelcomeScreen
  }
});
export default WelcomeStack;
