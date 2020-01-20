import { createSwitchNavigator } from 'react-navigation';
import WelcomeStack from './WelcomeStack';
import HomeTabs from './HomeTabs';

const RootNavigator = createSwitchNavigator(
  {
    Welcome: {
      screen: WelcomeStack,
    },
    Home: {
      screen: HomeTabs,
    },
  },
  {
    initialRouteName: 'Welcome',
  }
);

export default RootNavigator;
