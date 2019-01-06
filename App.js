import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';

import RootNavigator from './app/navigation/RootNavigator';

const AppContainer = createAppContainer(RootNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
