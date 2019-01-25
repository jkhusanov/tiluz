import { AsyncStorage } from 'react-native';
import { DONE_INTRO } from './types';

export const doneIntro = () => async dispatch => {
  let token = await AsyncStorage.getItem('done_intro_token');
  if (token) {
    // Dispatch an action saying app introduction is done
    dispatch({ type: DONE_INTRO, payload: token });
  } else {
    await AsyncStorage.setItem('done_intro_token', 'done');
    dispatch({ type: DONE_INTRO, payload: token });
  }
};
