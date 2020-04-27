import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import './app/constants/styles-config';
import { en, uz, uzc, ru } from './app/constants/text-constants';
import LanguageContext from './app/store/LanguageContext';

import reducers from './app/reducers';

import RootNavigator from './app/navigation/RootNavigator';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

i18n.fallbacks = true;
i18n.translations = { en, uz, uzc, ru };
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
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </LanguageContext.Provider>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
