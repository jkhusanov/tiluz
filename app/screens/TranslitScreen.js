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
import Modal from 'react-native-modal';
import transliterator from '../components/transliterator';
import { ltn_substitutions, cyrl_substitutions } from '../components/charSubstitutions';
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
  state = { text: '', convertedText: '', isModalVisible: false, isLatin: true };
  _setContent() {
    if (this.state.convertedText !== '') {
      Clipboard.setString(this.state.convertedText);
      this._setKeyboard();
      this.setState({ isModalVisible: true });
    }
  }
  _setKeyboard() {
    Keyboard.dismiss();
  }

  _transliterate(text) {
    const { isLatin } = this.state;

    const result = transliterator(text, isLatin ? ltn_substitutions : cyrl_substitutions);

    this.setState({ convertedText: result });
  }
  _changeAbc() {
    this.setState({ isLatin: !this.state.isLatin });
  }

  _renderModalContent = () => (
    <View style={styles.modalContent}>
      <Text style={{ fontSize: 16, color: '#f5f5f5' }}>Matn nusxasi olindi</Text>
    </View>
  );
  _hideModal() {
    setTimeout(() => this.setState({ isModalVisible: !this.state.isModalVisible }), 1000);
  }
  render() {
    const { isLatin } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#3490de" barStyle="light-content" />
        <View style={styles.alphabetChooseContainer}>
          <View style={styles.alphabetButtonContainer}>
            <Text style={styles.alphabetText}>{isLatin ? 'Lotin' : 'Кирилл'}</Text>
          </View>

          <View style={styles.alphabetButtonContainer}>
            <Text style={styles.alphabetText}>{isLatin ? 'Кирилл' : 'Lotin'}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.swapButtonContainer} onPress={() => this._changeAbc()}>
          <MaterialCommunityIcons
            name="swap-horizontal-variant"
            size={Platform.OS === 'ios' ? 20 : 22}
            style={styles.changeButtonIconStyle}
          />
        </TouchableOpacity>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <Card containerStyle={styles.textInputContainer}>
            <TextInput
              style={styles.textInputStyle}
              multiline={true}
              autoCorrect={false}
              spellCheck={false}
              placeholder="Matnni o‘girish uchun kiriting"
              onChangeText={text => this.setState({ text }, this._transliterate(text))}
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
          <ScrollView>
            <Text style={styles.textOutputStyle} selectable>
              {this.state.convertedText}
            </Text>
          </ScrollView>
          <View>
            <Modal
              isVisible={this.state.isModalVisible}
              style={styles.bottomModal}
              onModalShow={() => this._hideModal()}
              backdropOpacity={0}
            >
              {this._renderModalContent()}
            </Modal>
          </View>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
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
    top: 19,
    position: 'absolute',
    backgroundColor: '#3490de',
    height: 35,
    width: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  alphabetButtonContainer: {},
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
    elevation: 1,
    height: height / 4 + 40
  },
  textOutputStyle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '500'
  },
  copyButtonIconStyle: {
    color: '#fff'
  },
  modalContent: {
    backgroundColor: '#212121',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
    paddingBottom: height / 10
  }
});
