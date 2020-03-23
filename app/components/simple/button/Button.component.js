import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import { styled } from '@shipt/react-native-tachyons';

const ButtonContainer = styled(TouchableOpacity)`ph3 pv3 br3 bg-mainBlue aic`;
const ButtonContent = styled(Text)`white fw7 f3`;

const Button = props => {
  const { title, onPress } = props;
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonContent>{title}</ButtonContent>
    </ButtonContainer>
  );
};
Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Button;
