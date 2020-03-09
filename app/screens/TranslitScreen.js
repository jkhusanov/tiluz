import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Clipboard,
  TouchableOpacity,
  Platform,
  StatusBar,
  Keyboard,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import InputCard from '@components/complex/inputCard/InputCard.component';
import OutputCard from '@components/complex/outputCard/OutputCard.component';
import { styled } from '@shipt/react-native-tachyons';
import LanguageContext from '@store/LanguageContext';
import COLORS from '@constants/colors';
import transliterator from '../utils/transliterator';
import { ltnSubstitutions, cyrlSubstitutions } from '../utils/charSubstitutions';

const styles = StyleSheet.create({
  alphabetChooseContainer: {
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },
  swapButtonContainer: {
    flex: 2,
    height: 35,
    width: 50,
    borderRadius: 15,
  },
  alphabetLeftButtonContainer: {
    flex: 4,
    alignItems: 'center',
  },
  alphabetRightButtonContainer: {
    flex: 4,
    alignItems: 'center',
  },
});

const Container = styled(View)`flx-i bg-white`;

const AlphabetChooseContainer = styled(
  View,
  styles.alphabetChooseContainer
)`pa3 flx-row jcc aic bg-greyThree`;

const SwapButtonContainer = styled(
  TouchableOpacity,
  styles.swapButtonContainer
)`bg-mainBlue jcc aic`;

const AlphabetText = styled(Text)`f2 greySix`;
const SwapButtonIcon = styled(MaterialCommunityIcons)`white`;
const InputAndOutPutWrapper = styled(View)`flx-i pa3`;
const OutPutWrapper = styled(View)`flx-i pt3`;
const _setKeyboard = () => {
  Keyboard.dismiss();
};

const TransLitScreen = () => {
  const [text, setText] = useState('');
  const [convertedText, setConvertedText] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLatin, setIsLatin] = useState(true);

  const languageContext = useContext(LanguageContext);
  const { t } = languageContext;

  const _setContent = () => {
    if (convertedText !== '') {
      Clipboard.setString(convertedText);
      _setKeyboard();
      setIsModalVisible(true);
    }
  };

  const _transliterate = value => {
    setText(value);

    const result = transliterator(value, isLatin ? ltnSubstitutions : cyrlSubstitutions);

    setConvertedText(result);
  };

  const _changeAbc = () => {
    setIsLatin(!isLatin);
  };

  const _hideModal = () => {
    setTimeout(() => setIsModalVisible(!isModalVisible), 1250);
  };

  return (
    <Container>
      <StatusBar backgroundColor={COLORS.blueOne} barStyle="light-content" />
      <AlphabetChooseContainer>
        <View style={styles.alphabetLeftButtonContainer}>
          <AlphabetText>{isLatin ? t('TRANSLIT.LATIN') : t('TRANSLIT.CYRILLIC')}</AlphabetText>
        </View>
        <SwapButtonContainer onPress={_changeAbc}>
          <SwapButtonIcon name="swap-horizontal-variant" size={Platform.OS === 'ios' ? 20 : 22} />
        </SwapButtonContainer>
        <View style={styles.alphabetRightButtonContainer}>
          <AlphabetText>{isLatin ? t('TRANSLIT.CYRILLIC') : t('TRANSLIT.LATIN')}</AlphabetText>
        </View>
      </AlphabetChooseContainer>

      <InputAndOutPutWrapper>
        <InputCard
          value={text}
          onChangeText={_transliterate}
          onInputFinish={_setKeyboard}
          placeholder={t('TRANSLIT.TEXT_INPUT_PLACEHOLDER')}
        />
        <OutPutWrapper>
          <OutputCard
            value={convertedText}
            onCopyButtonPress={_setContent}
            isModalVisible={isModalVisible}
            hideModal={_hideModal}
            clipboardCopyText={t('TRANSLIT.CLIPBOARD_COPY')}
          />
        </OutPutWrapper>
      </InputAndOutPutWrapper>
    </Container>
  );
};

export default TransLitScreen;
