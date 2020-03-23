import { DONE_INTRO, WELCOME_LOAD_TOKEN } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case DONE_INTRO:
      return { token: action.payload };
    case WELCOME_LOAD_TOKEN:
      return { token: action.payload };
    default:
      return state;
  }
}
