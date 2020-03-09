import React from 'react';
import {
  TextInput,
  TouchableOpacity,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { styled } from '@shipt/react-native-tachyons';
import Card from '@components/simple/card/Card.component';

const Input = styled(TextInput)`flx-i f3 mainBlue fw5 wp100`;
const MainActionButton = styled(TouchableOpacity)`jcc aife`;
const MainActionButtonIcon = styled(SimpleLineIcons)`mainBlue`;

const InputCard = props => {
  const { value, onChangeText, onInputFinish, placeholder } = props;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Card>
        <Input
          multiline
          autoCorrect={false}
          spellCheck={false}
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
          returnKeyType="go"
          onSubmitEditing={onInputFinish}
        />
        <MainActionButton onPress={onInputFinish}>
          <MainActionButtonIcon name="arrow-right-circle" size={Platform.OS === 'ios' ? 22 : 23} />
        </MainActionButton>
      </Card>
    </TouchableWithoutFeedback>
  );
};

InputCard.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onInputFinish: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default InputCard;
