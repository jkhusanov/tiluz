import React from 'react';
import { TouchableOpacity, ScrollView, Text, View, Dimensions, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { styled, T as TS } from '@shipt/react-native-tachyons';
import Modal from 'react-native-modal';
import Card from '@components/simple/card/Card.component';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  CopyModalContent: {
    marginBottom: height / 10,
  },
});

const CopyButton = styled(TouchableOpacity)`jcc aife`;
const CopyButtonIcon = styled(MaterialCommunityIcons)`white`;
const Output = styled(Text)`flx-i f3 white fw5`;
const ModalWrapper = styled(Modal)`jcfe ma0`;
const CopyModalContent = styled(View, styles.CopyModalContent)`bg-greyFour pa3`;
const CopyModalText = styled(Text)`f2 greyFive`;

const OutputCard = props => {
  const { value, onCopyButtonPress, isModalVisible, hideModal, clipboardCopyText } = props;

  return (
    <Card style={[value.length ? TS('bg-mainBlue') : null]}>
      <CopyButton onPress={onCopyButtonPress}>
        <CopyButtonIcon name="content-copy" size={24} />
      </CopyButton>
      <ScrollView>
        <Output selectable>{value}</Output>
      </ScrollView>
      <View>
        <ModalWrapper isVisible={isModalVisible} onModalShow={hideModal} backdropOpacity={0}>
          <CopyModalContent>
            <CopyModalText>{clipboardCopyText}</CopyModalText>
          </CopyModalContent>
        </ModalWrapper>
      </View>
    </Card>
  );
};

OutputCard.propTypes = {
  value: PropTypes.string.isRequired,
  onCopyButtonPress: PropTypes.func.isRequired,
  isModalVisible: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
  clipboardCopyText: PropTypes.string.isRequired,
};

export default OutputCard;
