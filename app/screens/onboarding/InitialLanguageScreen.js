import React, { useContext } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import PropTypes from 'prop-types';
import ChooseLanguage from '@components/complex/chooseLanguage/ChooseLanguage.component';
import * as actions from '@actions';
import LanguageContext from '@store/LanguageContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native-elements';
import COLORS from '@constants/colors';
import { useDispatch } from 'react-redux';

const InitialLanguageScreen = props => {
  const { navigation } = props;

  const dispatch = useDispatch();
  const languageContext = useContext(LanguageContext);
  const { t, locale } = languageContext;

  const _navigateToWelcomeSlider = () => {
    dispatch(actions.setAppLanguage(locale));
    navigation.navigate('Welcome');
  };

  return (
    <View style={styles.component}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ChooseLanguage />
      <SafeAreaView
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button
          title={t('INITIAL_LANGUAGE.NEXT')}
          type="solid"
          buttonStyle={styles.saveButtonStyle}
          containerStyle={styles.saveButtonContainer}
          titleStyle={styles.saveButtonTitle}
          onPress={_navigateToWelcomeSlider}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    flex: 1,
    backgroundColor: 'white',
  },
  saveButtonContainer: {
    padding: 16,
  },
  saveButtonStyle: {
    width: wp('85%'),
    height: hp('6%'),
    backgroundColor: COLORS.mainBlue,
    borderRadius: 10,
  },
  saveButtonTitle: {
    fontSize: hp(2),
    fontWeight: '700',
  },
});

InitialLanguageScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default InitialLanguageScreen;
