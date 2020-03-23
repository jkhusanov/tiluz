import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useDispatch } from 'react-redux';
import LanguageButton from '@components/simple/languageButton/LanguageButton.component';
import { LANGUAGE_SETTINGS_SCREEN as CONSTANTS } from '@constants/text-constants';
import * as actions from '@actions';
import LanguageContext from '@store/LanguageContext';

const ChooseLanguage = () => {
  const dispatch = useDispatch();

  const languageContext = useContext(LanguageContext);
  const { locale, setLocale } = languageContext;

  const isEnglish = locale === 'en' || locale === 'en-US';
  const isUzbek = locale === 'uz';

  const _setEnglish = () => {
    setLocale('en');
    dispatch(actions.setAppLanguage('en'));
  };

  const _setUzbek = () => {
    setLocale('uz');
    dispatch(actions.setAppLanguage('uz'));
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <LanguageButton
          onPress={_setEnglish}
          englishTitle={CONSTANTS.ENGLISH}
          originalTitle={CONSTANTS.EN_ORIGINAL}
          icon={CONSTANTS.EN_ICON}
          isSelected={isEnglish}
        />

        <LanguageButton
          onPress={_setUzbek}
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
  },
  buttonsContainer: {
    paddingTop: 32,
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
