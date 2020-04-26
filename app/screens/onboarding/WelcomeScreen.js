import React, { useContext } from 'react';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useDispatch } from 'react-redux';
import { SafeAreaConsumer } from 'react-native-safe-area-context';
import PropTypes from 'prop-types';

import LanguageContext from '@store/LanguageContext';
import * as actions from '@actions';
import { T as ST } from '@shipt/react-native-tachyons';

const WelcomeScreen = (props) => {
  const languageContext = useContext(LanguageContext);
  const { t } = languageContext;
  const { navigation } = props;
  const dispatch = useDispatch();

  const slides = [
    {
      key: 'slide1',
      title: t('WELCOME_SLIDER_ONE_TITLE'),
      text: t('WELCOME_SLIDER_ONE_BODY'),
      icon: 'swap-horizontal-variant',
      colors: ['#396afc', '#B066FE'],
    },
    {
      key: 'slide2',
      title: t('WELCOME_SLIDER_TWO_TITLE'),
      text: t('WELCOME_SLIDER_TWO_BODY'),
      icon: 'cloud-off-outline',
      colors: ['#56CCF2', '#B066FE'],
    },
    {
      key: 'slide3',
      title: t('WELCOME_SLIDER_THREE_TITLE'),
      text: t('WELCOME_SLIDER_THREE_BODY'),
      icon: 'shield-lock',
      colors: ['#29ABE2', '#4F00BC'],
    },
  ];

  const _renderItem = ({ item, dimensions, index }) => {
    return (
      <LinearGradient
        style={[styles.mainContent, dimensions]}
        colors={item.colors}
        start={{ x: 0, y: 0.1 }}
        end={{ x: 0.1, y: 1 }}
      >
        <MaterialCommunityIcons
          style={{ backgroundColor: 'transparent' }}
          name={item.icon}
          size={200}
          color="white"
        />
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>

        {index === 0 && (
          <SafeAreaConsumer>
            {(insets) => (
              <TouchableOpacity
                style={ST('absolute top-3 left-3', { paddingTop: insets.top })}
                onPress={() => navigation.goBack()}
              >
                <MaterialIcons
                  style={{ backgroundColor: 'transparent' }}
                  name="arrow-back"
                  size={40}
                  color="white"
                />
              </TouchableOpacity>
            )}
          </SafeAreaConsumer>
        )}
      </LinearGradient>
    );
  };

  return (
    <SafeAreaConsumer>
      {(insets) => (
        <>
          <StatusBar backgroundColor="#3490de" barStyle="light-content" animated />
          <AppIntroSlider
            data={slides}
            renderItem={_renderItem}
            bottomButton
            nextLabel={t('WELCOME_SLIDER_NEXT_BUTTON')}
            doneLabel={t('WELCOME_SLIDER_DONE_BUTTON')}
            onDone={() => dispatch(actions.doneIntro())}
            paginationStyle={{ paddingBottom: insets.bottom }}
            buttonStyle={ST('br2')}
          />
        </>
      )}
    </SafeAreaConsumer>
  );
};

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 320,
    height: 320,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 16,
    fontSize: 16,
  },
  title: {
    fontSize: 25,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
  },
});

WelcomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default WelcomeScreen;
