import React, { useEffect, useContext } from 'react';
import { AsyncStorage } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { AppLoading } from 'expo';
import * as actions from '@actions';
import LanguageContext from '@store/LanguageContext';

import WelcomeStack from './WelcomeStack';
import HomeTabs from './HomeTabs';

/**
 * Use this below to load welcome screen each time on dev mode
 */
if (__DEV__) {
  AsyncStorage.removeItem('done_intro_token');
  // AsyncStorage.removeItem('app_language');
}

const RootNavigator = () => {
  const languageContext = useContext(LanguageContext);
  const storedWelcomeToken = useSelector(state => state.onboard.token);
  const storedAppLanguage = useSelector(state => state.appLanguage.storedAppLanguage);
  const dispatch = useDispatch();

  const { locale, setLocale } = languageContext;

  useEffect(() => {
    dispatch(actions.getWelcomeLoadToken());
  }, []);

  useEffect(() => {
    dispatch(actions.getAppLanguage());
    setLocale(storedAppLanguage || locale);
  }, [storedAppLanguage]);

  if (storedWelcomeToken !== null && !storedWelcomeToken) {
    return <AppLoading />;
  }

  return storedWelcomeToken ? <HomeTabs /> : <WelcomeStack />;
};
export default RootNavigator;
