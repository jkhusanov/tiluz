import { AsyncStorage } from 'react-native';
import { DONE_INTRO, WELCOME_LOAD_TOKEN } from './types';

export const doneIntro = () => async dispatch => {
  await AsyncStorage.setItem('done_intro_token', 'done');
  const token = await AsyncStorage.getItem('done_intro_token');

  dispatch({ type: DONE_INTRO, payload: token });
};

export const getWelcomeLoadToken = () => async dispatch => {
  const token = await AsyncStorage.getItem('done_intro_token');
  dispatch({ type: WELCOME_LOAD_TOKEN, payload: token });
};
