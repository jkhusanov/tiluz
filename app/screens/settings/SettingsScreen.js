import React, { useContext } from 'react';
import { Text, View, Platform, TouchableOpacity, Linking, Share, ScrollView } from 'react-native';
import { Ionicons, MaterialCommunityIcons, Entypo, SimpleLineIcons } from '@expo/vector-icons';
import { styled, T as TS } from '@shipt/react-native-tachyons';
import { SETTINGS_SCREEN } from '@constants/text-constants';
import LanguageContext from '@store/LanguageContext';
import COLORS from '@constants/colors';
import FooterSignature from '@components/simple/footerSignature/FooterSignature.component';
import PropTypes from 'prop-types';

const Container = styled(View)`flx-i bg-white`;
const MainContent = styled(ScrollView)`flx-i`;

// These could be changed to separate components if needed later
const CellWrapper = styled(View)`flx-i`;
const ActionCell = styled(TouchableOpacity)`flx-i flx-row aic pa3 bt bb b--mainBlue`;
const ArrowIcon = styled(Entypo)`absolute right-1 `;
const ActionText = styled(Text)`flx-i pl3 f2`;

const _openStore = () => {
  Linking.openURL(
    Platform.OS === 'ios' ? SETTINGS_SCREEN.IOS_APP_URL : SETTINGS_SCREEN.ANDROID_STORE_URL
  );
};

const _shareApp = () => {
  Share.share({
    message: `Oʻzbek tili yordamchisi ${
      Platform.OS === 'ios' ? 'Tiluz' : SETTINGS_SCREEN.ANDROID_STORE_URL
    }`,
    url: SETTINGS_SCREEN.IOS_APP_URL,
    title: 'Tiluz',
  });
};

const SettingsScreen = props => {
  const { navigation } = props;
  const languageContext = useContext(LanguageContext);
  const { t } = languageContext;

  const _navigateToLanguage = () => {
    navigation.navigate('Language');
  };

  return (
    <Container>
      <MainContent>
        <CellWrapper>
          <ActionCell onPress={_navigateToLanguage}>
            <SimpleLineIcons name="globe" size={24} color={COLORS.mainBlue} />
            <ActionText>{t('SETTINGS.LANGUAGE')}</ActionText>
            <ArrowIcon name="chevron-right" color={COLORS.mainBlue} size={24} />
          </ActionCell>
        </CellWrapper>

        <CellWrapper style={TS('mt3')}>
          <ActionCell onPress={_openStore}>
            <Ionicons name="ios-star-outline" color={COLORS.mainBlue} size={24} />
            <ActionText>{t('SETTINGS.RATE_APP')}</ActionText>
            <ArrowIcon name="chevron-right" color={COLORS.mainBlue} size={24} />
          </ActionCell>
        </CellWrapper>

        <CellWrapper style={TS('mt3')}>
          <ActionCell onPress={_shareApp}>
            <MaterialCommunityIcons name="share" size={24} color={COLORS.mainBlue} />
            <ActionText>{t('SETTINGS.SHARE_APP')}</ActionText>
            <ArrowIcon name="chevron-right" color={COLORS.mainBlue} size={24} />
          </ActionCell>
        </CellWrapper>
      </MainContent>
      <FooterSignature />
    </Container>
  );
};
SettingsScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};
export default SettingsScreen;
