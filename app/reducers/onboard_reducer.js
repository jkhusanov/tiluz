import { DONE_INTRO } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case DONE_INTRO:
      return { token: action.payload };
    default:
      return state;
  }
}
