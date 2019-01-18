import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: 'slide1',
    title: 'Lotin - Kirill',
    text:
      'Oʻzbek tilidagi matnni Lotin yozuvidan Kirillga va Kirill yozuvidan Lotin yozuviga oʻgirish',
    icon: 'swap-horizontal-variant',
    colors: ['#396afc', '#B066FE']
  },
  {
    key: 'slide2',
    title: 'Offline',
    text: 'Ilova internetsiz ishlaydi',
    icon: 'cloud-off-outline',
    colors: ['#56CCF2', '#B066FE']
  },
  {
    key: 'slide3',
    title: 'Xavsiz',
    text: 'Barcha vazifalar faqatgina telefonda bajariladi, maʼlumotlar tashqariga yuborilmaydi ',
    icon: 'security-lock',
    colors: ['#29ABE2', '#4F00BC']
  }
];

export default class WelcomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  _renderItem = props => (
    <LinearGradient
      style={[
        styles.mainContent,
        {
          paddingTop: props.topSpacer,
          paddingBottom: props.bottomSpacer,
          width: props.width,
          height: props.height
        }
      ]}
      colors={props.colors}
      start={{ x: 0, y: 0.1 }}
      end={{ x: 0.1, y: 1 }}
    >
      <MaterialCommunityIcons
        style={{ backgroundColor: 'transparent' }}
        name={props.icon}
        size={200}
        color="white"
      />
      <View>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </LinearGradient>
  );

  render() {
    return (
      <AppIntroSlider
        slides={slides}
        renderItem={this._renderItem}
        bottomButton
        onDone={() => this.props.navigation.navigate('Home')}
        doneLabel="Ilovani ochish"
        nextLabel="Keyingisi"
      />
    );
  }
}

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  image: {
    width: 320,
    height: 320
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 16,
    fontSize: 16
  },
  title: {
    fontSize: 25,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16
  }
});
