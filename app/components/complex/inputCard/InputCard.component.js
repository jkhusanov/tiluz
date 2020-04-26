import React from 'react';
import {
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { styled } from '@shipt/react-native-tachyons';
import Card from '@components/simple/card/Card.component';
import COLORS from '@constants/colors';

const Input = styled(TextInput)`flx-i f3 mainBlue fw5 wp100`;
const ActionButton = styled(TouchableOpacity)``;
const ActionButtonIcon = styled(SimpleLineIcons)`mainBlue`;
const InputWrapper = styled(View)`flx-i flx-row`;
const ActionButtonsWrapper = styled(View)``;

const ClearButton = styled(ActionButton)``;
const ClearButtonIcon = styled(MaterialCommunityIcons)``;
const MainActionButton = styled(ActionButton)`aife`;
const MainActionButtonIcon = styled(ActionButtonIcon)``;

const InputCard = (props) => {
  const { value, onChangeText, onInputFinish, placeholder, onClearPress } = props;
  const isButtonDisabled = !value.length;

  const disabledButtonBackgroundColor = isButtonDisabled ? COLORS.greyOne : COLORS.mainBlue;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Card>
        <InputWrapper>
          <Input
            multiline
            autoCorrect={false}
            spellCheck={false}
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}
            returnKeyType="go"
            onSubmitEditing={onInputFinish}
            textAlignVertical="top"
            blurOnSubmit
          />
          <ActionButtonsWrapper>
            <ClearButton onPress={onClearPress} disabled={isButtonDisabled}>
              <ClearButtonIcon name="close" size={24} color={disabledButtonBackgroundColor} />
            </ClearButton>
          </ActionButtonsWrapper>
        </InputWrapper>

        <ActionButtonsWrapper>
          <MainActionButton onPress={onInputFinish}>
            <MainActionButtonIcon name="arrow-right-circle" size={24} />
          </MainActionButton>
        </ActionButtonsWrapper>
      </Card>
    </TouchableWithoutFeedback>
  );
};

InputCard.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onInputFinish: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  onClearPress: PropTypes.func.isRequired,
};

export default InputCard;
