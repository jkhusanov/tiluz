import { combineReducers } from 'redux';

import onboard from './onboard_reducer';
import appLanguage from './app_language_reducer';

export default combineReducers({
  onboard,
  appLanguage,
});
