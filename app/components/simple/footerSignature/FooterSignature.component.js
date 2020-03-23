import React, { useContext } from 'react';
import { View, Text, Platform } from 'react-native';
import { styled } from '@shipt/react-native-tachyons';
import { Ionicons } from '@expo/vector-icons';
import LanguageContext from '@store/LanguageContext';
import COLORS from '@constants/colors';

const Container = styled(View)`flx-row pa3 jcc aic`;
const ContentText = styled(Text)`f1 greySeven`;
const FooterSignature = () => {
  const languageContext = useContext(LanguageContext);
  const { t } = languageContext;

  return (
    <Container>
      <ContentText>{t('FOOTER_SIGNATURE.MADE_WITH')}</ContentText>
      <Ionicons
        name="ios-heart-empty"
        size={Platform.OS === 'ios' ? 18 : 19}
        color={COLORS.greySeven}
      />
      <ContentText>{t('FOOTER_SIGNATURE.BY')}</ContentText>
    </Container>
  );
};

export default FooterSignature;
