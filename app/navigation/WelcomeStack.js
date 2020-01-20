import { createStackNavigator } from 'react-navigation-stack';

import WelcomeScreen from '../screens/WelcomeScreen';

const WelcomeStack = createStackNavigator({
  Welcome: {
    screen: WelcomeScreen,
  },
});
export default WelcomeStack;
