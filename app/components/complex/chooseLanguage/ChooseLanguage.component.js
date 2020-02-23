import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LanguageButton from '@components/simple/languageButton/LanguageButton.component';
import { LANGUAGE_SETTINGS_SCREEN as CONSTANTS } from '@constants/text-constants';
import * as actions from '@actions';
import LanguageContext from '@store/LanguageContext';

const ChooseLanguage = props => {
  const languageContext = useContext(LanguageContext);
  const { t, locale, setLocale } = languageContext;

  const isEnglish = locale === 'en' || locale === 'en-US';
  const isUzbek = locale === 'uz';

  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <Text style={styles.title}>{t('CHOOSE_LANGUAGE.TITLE')}</Text>
        <Text style={styles.subtitle}>{t('CHOOSE_LANGUAGE.SUB_TITLE')}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <LanguageButton
          onPress={() => setLocale('en')}
          englishTitle={CONSTANTS.ENGLISH}
          originalTitle={CONSTANTS.EN_ORIGINAL}
          icon={CONSTANTS.EN_ICON}
          isSelected={isEnglish}
        />

        <LanguageButton
          onPress={() => setLocale('uz')}
          englishTitle={CONSTANTS.UZBEK}
          originalTitle={CONSTANTS.UZ_ORIGINAL}
          icon={CONSTANTS.UZ_ICON}
          isSelected={isUzbek}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  messageContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: hp(2.9),
  },
  subtitle: {
    paddingTop: 16,
    fontSize: hp(1.9),
  },
  buttonsContainer: {
    flex: 3,
  },
  button: {
    flexDirection: 'row',
    padding: wp(3),
    borderRadius: wp(25),
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  flagIcon: {
    fontSize: hp(5),
  },
  languageTitlesContainer: {
    paddingLeft: wp(5),
  },
  englishTitle: {
    fontSize: hp(2),
    fontWeight: '700',
  },
  originalTitle: {
    color: '#a7a7a7',
  },
});

export default ChooseLanguage;
