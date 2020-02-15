import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const LanguageButton = ({ onPress, icon, englishTitle, originalTitle, isSelected }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <View style={styles.languageInfoContainer}>
        <Text style={styles.flagIcon}>{icon}</Text>
        <View style={styles.languageTitlesContainer}>
          <Text style={styles.englishTitle}>{englishTitle}</Text>
          <Text style={styles.originalTitle}>{originalTitle}</Text>
        </View>
      </View>
      {isSelected && (
        <MaterialCommunityIcons name="check" size={hp(4)} color="#1CD8D2" accessible={false} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    padding: wp(3),
    borderRadius: wp(25),
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'space-between',
    marginVertical: hp(2),
  },
  languageInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flagIcon: {
    fontSize: hp(4),
  },
  languageTitlesContainer: {
    paddingLeft: wp(5),
  },
  englishTitle: {
    fontSize: hp(2),
    fontWeight: '700',
  },
  originalTitle: {
    color: '#a7a7a7',
  },
});

LanguageButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  englishTitle: PropTypes.string.isRequired,
  originalTitle: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
};

LanguageButton.defaultProps = {
  isSelected: false,
};

export default LanguageButton;
