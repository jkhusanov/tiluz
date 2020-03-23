import { AsyncStorage } from 'react-native';
import { APP_LANGUAGE, STORED_APP_LANGUAGE } from './types';

export const setAppLanguage = language => async dispatch => {
  await AsyncStorage.setItem('app_language', language);

  dispatch({ type: APP_LANGUAGE, payload: language });
};

export const getAppLanguage = () => async dispatch => {
  const storedLanguage = await AsyncStorage.getItem('app_language');
  dispatch({ type: STORED_APP_LANGUAGE, payload: storedLanguage });
};
