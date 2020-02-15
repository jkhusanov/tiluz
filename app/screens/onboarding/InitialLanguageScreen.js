import React from 'react';
import { View, StyleSheet, StatusBar, Text, TouchableOpacity } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ChooseLanguage from '@components/complex/chooseLanguage/ChooseLanguage.component';
import * as actions from '@actions';

const InitialLanguageScreen = props => {
  return (
    <View style={styles.component}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ChooseLanguage />
      <Text>Next button here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    flex: 1,
    backgroundColor: 'white',
  },
});

InitialLanguageScreen.navigationOptions = ({ navigation, screenProps }) => {
  const { t } = screenProps;
  const _navigateToWelcomeSlider = () => {
    navigation.navigate('Welcome');
  };
  return {
    headerRight: () => (
      <TouchableOpacity style={{ paddingRight: 16 }} onPress={_navigateToWelcomeSlider}>
        <Text style={{ fontSize: 18 }}>{t('INITIAL_LANGUAGE.SKIP')}</Text>
      </TouchableOpacity>
    ),
    title: '',
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0,
    },
  };
};

export default InitialLanguageScreen;
