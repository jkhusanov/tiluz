import { APP_LANGUAGE, STORED_APP_LANGUAGE } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case APP_LANGUAGE:
      return { storedAppLanguage: action.payload };
    case STORED_APP_LANGUAGE:
      return { storedAppLanguage: action.payload };
    default:
      return state;
  }
}
