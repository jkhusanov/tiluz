import React from 'react';
import { createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import reducers from './app/reducers';

import RootNavigator from './app/navigation/RootNavigator';

const AppContainer = createAppContainer(RootNavigator);

export default class App extends React.Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <AppContainer />
        </SafeAreaProvider>
      </Provider>
    );
  }
}
