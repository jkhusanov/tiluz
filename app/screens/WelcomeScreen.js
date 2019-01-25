import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, View, Text, Image, AsyncStorage } from 'react-native';
import { LinearGradient, AppLoading } from 'expo';
import AppIntroSlider from 'react-native-app-intro-slider';
import { connect } from 'react-redux';

import * as actions from '../actions';

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

class WelcomeScreen extends React.Component {
  state = {
    token: null
  };

  async componentDidMount() {
    // AsyncStorage.removeItem('done_intro_token');

    let token = await AsyncStorage.getItem('done_intro_token');
    if (token) {
      this.setState({ token });
      this.props.navigation.navigate('Home');
    } else {
      this.setState({ token: false });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.token !== prevProps.token) {
      this.props.navigation.navigate('Home');
    }
  }

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
    if (this.state.token === null) {
      return <AppLoading />;
    }
    return (
      <AppIntroSlider
        slides={slides}
        renderItem={this._renderItem}
        bottomButton
        onDone={() => this.props.doneIntro()}
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

function mapStateToProps({ onboard }) {
  return { token: onboard.token };
}

export default connect(
  mapStateToProps,
  actions
)(WelcomeScreen);
