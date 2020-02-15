import { createStackNavigator } from 'react-navigation-stack';

import InitialLanguageScreen from 'app/screens/onboarding/InitialLanguageScreen';
import WelcomeScreen from 'app/screens/onboarding/WelcomeScreen';

const WelcomeStack = createStackNavigator({
  InitialLanguage: {
    screen: InitialLanguageScreen,
  },
  Welcome: {
    screen: WelcomeScreen,
  },
});
export default WelcomeStack;
