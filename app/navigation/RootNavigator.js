import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';

import WelcomeStack from './WelcomeStack';
import HomeTabs from './HomeTabs';

/**
 * Use this below to load welcome screen each time on dev mode
 */
if (__DEV__) AsyncStorage.removeItem('done_intro_token');

const RootNavigator = () => {
  const [isWelcomeTokenPresent, SetIsWelcomeTokenPresent] = useState(null);
  const storedWelcomeToken = useSelector(state => state.onboard.token);

  useEffect(() => {
    const _checkForWelcomeLoad = async () => {
      const localToken = await AsyncStorage.getItem('done_intro_token');
      if (localToken) {
        SetIsWelcomeTokenPresent(localToken);
      } else {
        SetIsWelcomeTokenPresent(false);
      }
    };
    _checkForWelcomeLoad();
  }, [storedWelcomeToken]);

  if (isWelcomeTokenPresent === null) {
    return <AppLoading />;
  }

  return isWelcomeTokenPresent ? <HomeTabs /> : <WelcomeStack />;
};
export default RootNavigator;
