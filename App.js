import React, { useState } from 'react';
import { createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import { en, uz } from './app/constants/text-constants';
import LanguageContext from './app/store/LanguageContext';

import reducers from './app/reducers';

import RootNavigator from './app/navigation/RootNavigator';

const AppContainer = createAppContainer(RootNavigator);

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

i18n.fallbacks = true;
i18n.translations = { en, uz };
i18n.locale = Localization.locale;

const App = () => {
  const [locale, setLocale] = useState(Localization.locale);

  const t = (scope, options) => {
    return i18n.t(scope, { locale, ...options });
  };

  const screenProps = { t, locale, setLocale };

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <LanguageContext.Provider value={{ ...screenProps }}>
          <AppContainer screenProps={{ ...screenProps }} />
        </LanguageContext.Provider>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
