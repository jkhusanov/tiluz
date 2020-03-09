import React from 'react';
import { StyleSheet, View } from 'react-native';
import { styled } from '@shipt/react-native-tachyons';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  textInputContainer: {
    borderWidth: 0,
    borderRadius: 10,
    shadowOpacity: 0.75,
    shadowRadius: 1,
    shadowColor: '#eeeeee',
    shadowOffset: { height: 2, width: 0 },
    elevation: 1,
  },
});
const CardWrapper = styled(View, styles.textInputContainer)`flx-i bg-greyThree pa3`;

const Card = props => {
  const { children, style } = props;
  return <CardWrapper style={style}>{children}</CardWrapper>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
