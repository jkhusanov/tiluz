import React from 'react';
import { View } from 'react-native';
import ChooseLanguage from '@components/complex/chooseLanguage/ChooseLanguage.component';
import { styled } from '@shipt/react-native-tachyons';

const Container = styled(View)`flx-i bg-white pa3`;

const LanguageScreen = () => {
  return (
    <Container>
      <ChooseLanguage />
    </Container>
  );
};

export default LanguageScreen;
