import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Clipboard,
  Button,
  TouchableOpacity,
  Platform,
  Dimensions,
  StatusBar,
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native';
import { SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Card } from 'react-native-elements';
const { width, height } = Dimensions.get('window');

export default class TransLit extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Tiluz',
    headerTintColor: 'white',
    headerTitleStyle: {
      fontSize: 20,
      fontWeight: 'bold'
    },
    headerStyle: {
      backgroundColor: '#3490de',
      borderBottomWidth: 0.5,
      borderBottomColor: '#aaaaaa'
    }
  });
  state = { text: '' };
  _setContent() {
    Clipboard.setString(this.state.text);
  }
  _setKeyboard() {
    Keyboard.dismiss();
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#3490de" barStyle="light-content" />
        <View style={styles.alphabetChooseContainer}>
          <View style={styles.alphabetButtonContainer}>
            <Text style={styles.alphabetText}>Lotin</Text>
          </View>
          <TouchableOpacity style={styles.swapButtonContainer}>
            <MaterialCommunityIcons
              name="swap-horizontal-variant"
              size={Platform.OS === 'ios' ? 20 : 22}
              style={styles.changeButtonIconStyle}
            />
          </TouchableOpacity>
          <View style={styles.alphabetButtonContainer}>
            <Text style={styles.alphabetText}>Kirill</Text>
          </View>
        </View>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <Card containerStyle={styles.textInputContainer}>
            <TextInput
              style={styles.textInputStyle}
              multiline={true}
              autoCorrect={false}
              spellCheck={false}
              placeholder="Matnni o'girish uchun kiriting"
              onChangeText={text => this.setState({ text })}
              value={this.state.text}
              returnKeyType={'go'}
              onSubmitEditing={() => this._setKeyboard()}
            />
            <TouchableOpacity
              style={styles.textInteractionsButton}
              onPress={() => this._setKeyboard()}
            >
              <SimpleLineIcons
                name="arrow-right-circle"
                size={Platform.OS === 'ios' ? 22 : 23}
                style={styles.doButtonIconStyle}
              />
            </TouchableOpacity>
          </Card>
        </TouchableWithoutFeedback>

        <Card
          containerStyle={[
            styles.textOutputContainer,
            this.state.text.length > 0
              ? { backgroundColor: '#3490de' }
              : { backgroundColor: '#fafafa' }
          ]}
        >
          <Text
            style={styles.textOutputStyle}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
            selectable
          >
            {this.state.text}
          </Text>
          <TouchableOpacity
            style={styles.textInteractionsButton}
            onPress={() => this._setContent()}
          >
            <MaterialCommunityIcons
              name="content-copy"
              size={Platform.OS === 'ios' ? 22 : 23}
              style={styles.copyButtonIconStyle}
            />
          </TouchableOpacity>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
    // alignItems: 'center'
    // justifyContent: 'center'
  },
  alphabetChooseContainer: {
    height: height / 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fafafa',
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18
  },
  alphabetText: {
    fontSize: 18,
    color: '#304753'
  },
  swapButtonContainer: {
    backgroundColor: '#3490de',
    height: 35,
    width: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  changeButtonIconStyle: {
    color: '#fff'
  },
  textInputContainer: {
    backgroundColor: '#fafafa',
    borderWidth: 0,
    borderRadius: 10,
    shadowOpacity: 0.75,
    shadowRadius: 1,
    shadowColor: '#eeeeee',
    shadowOffset: { height: 2, width: 0 },
    elevation: 1
  },
  textInputStyle: {
    height: height / 4,
    fontSize: 20,
    color: '#07689f',
    fontWeight: '500'
  },
  textInteractionsButton: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end'
  },
  doButtonIconStyle: {
    color: '#3490de'
  },
  textOutputContainer: {
    backgroundColor: '#fafafa',
    borderWidth: 0,
    borderRadius: 10,
    shadowOpacity: 0.75,
    shadowRadius: 1,
    shadowColor: '#eeeeee',
    shadowOffset: { height: 2, width: 0 },
    elevation: 1
  },
  textOutputStyle: {
    height: height / 4,
    fontSize: 20,
    color: '#fff',
    fontWeight: '500'
  },
  copyButtonIconStyle: {
    color: '#fff'
  }
});
