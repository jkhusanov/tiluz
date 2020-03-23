import React, { useContext } from 'react';
import { View, StatusBar, Text } from 'react-native';
import PropTypes from 'prop-types';
import ChooseLanguage from '@components/complex/chooseLanguage/ChooseLanguage.component';
import Button from '@components/simple/button/Button.component';
import LanguageContext from '@store/LanguageContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styled } from '@shipt/react-native-tachyons';

const InitialLanguageContainer = styled(View)`flx-i bg-white pa3`;
const ButtonView = styled(View)`pa3`;
const MessageContainer = styled(View)`pt5 jcc`;
const Title = styled(Text)`f3`;
const SubTitle = styled(Text)`pt3 f2`;
const InitialLanguageScreen = props => {
  const { navigation } = props;

  const languageContext = useContext(LanguageContext);
  const { t } = languageContext;

  const _navigateToWelcomeSlider = () => {
    navigation.navigate('Welcome');
  };

  return (
    <InitialLanguageContainer>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <MessageContainer>
        <Title>{t('CHOOSE_LANGUAGE.TITLE')}</Title>
        <SubTitle>{t('CHOOSE_LANGUAGE.SUB_TITLE')}</SubTitle>
      </MessageContainer>
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
