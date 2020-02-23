import React, { useContext } from 'react';
import { View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import ChooseLanguage from '@components/complex/chooseLanguage/ChooseLanguage.component';
import Button from '@components/simple/button/Button.component';
import * as actions from '@actions';
import LanguageContext from '@store/LanguageContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { styled } from '@shipt/react-native-tachyons';

const InitialLanguageContainer = styled(View)`flx-i bg-white`;
const ButtonView = styled(View)`pa3`;

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
    <InitialLanguageContainer>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ChooseLanguage />
      <SafeAreaView>
        <ButtonView>
          <Button title={t('INITIAL_LANGUAGE.NEXT')} onPress={_navigateToWelcomeSlider} />
        </ButtonView>
      </SafeAreaView>
    </InitialLanguageContainer>
  );
};

InitialLanguageScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default InitialLanguageScreen;
