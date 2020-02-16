import React, { useContext } from 'react';
import { View, StyleSheet, StatusBar, Text, TouchableOpacity } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ChooseLanguage from '@components/complex/chooseLanguage/ChooseLanguage.component';
import * as actions from '@actions';
import LanguageContext from '@store/LanguageContext';

const InitialLanguageScreen = props => {
  const { navigation } = props;

  const languageContext = useContext(LanguageContext);
  const { t } = languageContext;

  const _navigateToWelcomeSlider = () => {
    navigation.navigate('Welcome');
  };

  return (
    <View style={styles.component}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={{ flex: 5 }}>
        <ChooseLanguage />
      </View>
      <View style={{ flex: 1, backgroundColor: 'red' }}>
        <TouchableOpacity style={{ paddingRight: 16 }} onPress={_navigateToWelcomeSlider}>
          <Text style={{ fontSize: 18 }}>{t('INITIAL_LANGUAGE.NEXT')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default InitialLanguageScreen;
