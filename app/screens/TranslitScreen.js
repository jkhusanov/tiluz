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
  state = { text: '', convertedText: '', isModalVisible: false };
  _setContent() {
    Clipboard.setString(this.state.convertedText);
    this._setKeyboard();
    this.setState({ isModalVisible: true });
  }
  _setKeyboard() {
    Keyboard.dismiss();
  }

  _transliterate(text) {
    /**
     * A unidirectional transliteration algorithm which makes a set of substitutions on a string, and handles common edge cases.
     * @param  {String} [string='']        The String to transliterate
     * @param  {Object} [substitutions={}] The set of substitutions to make on the String. Each key should be the character(s) to replace, and its value should be the character(s) to replace it with.
     * @return {String}                    Returns a new String with the substitutions made
     */
    const convert = (string = '', substitutions = {}) => {
      // save the string to a new variable for readability
      let str = string;

      // make a copy of the substitutions Object so that the original is not affected
      const subs = Object.assign({}, substitutions);

      // create an Object to hold any temporary substitutions
      const temps = {};

      // generates a random character from the geometric shapes block (U+25A0-25FF)
      const getRandomCodePoint = () => String.fromCodePoint(Math.floor(Math.random() * 95) + 9632);

      // save the list of inputs in order to check for feeding problems
      const inputs = Object.keys(substitutions);

      // get the list of substitutions
      Object.entries(substitutions)

        // sort the substitutions by longest string (avoids the substring problem)
        .sort(([a], [b]) => b.length - a.length)

        // for each substitution...
        .forEach(([input, replacement]) => {
          // check for feeding problem
          if (inputs.includes(replacement)) {
            // get a character to use as a temporary substitution
            let temp = getRandomCodePoint();

            // if that character has already been used, get another
            while (temp in temps) temp = getRandomCodePoint();

            // add the temporary substitution to the temps Object
            temps[temp] = replacement;

            // swap the original replacement with the temporary one
            subs[input] = temp;
          }

          // create a regular expression that searches globally for the string to replace
          const regexp = new RegExp(input, 'gu');

          // replace all matched instances of the regular expression with the new string
          // at this point, `subs` contains temporary substitutions, so those will be made
          str = str.replace(regexp, subs[input]);
        });

      // undo the temporary substitutions:
      // get the list of temporary substitutions

      Object.entries(temps)
        // for each temporary substitution that was made...
        .forEach(([temp, replacement]) => {
          // create a regular expression that searches globally for the temporary substitution to replace
          const regexp = new RegExp(temp, 'gu');

          // replace all matched instances of the temporary substitution with the original subsitution
          str = str.replace(regexp, replacement);
        });

      // return the string with the substitutions made

      return str;
    };
    const ltn_substitutions = {
      Ts: 'Ц',
      ts: 'ц',
      Oʻ: 'Ў',
      Oʼ: 'Ў',
      'O’': 'Ў',
      "O'": 'Ў',
      'O`': 'Ў',
      'O‘': 'Ў',
      oʻ: 'ў',
      oʼ: 'ў',
      'o’': 'ў',
      "o'": 'ў',
      'o`': 'ў',
      'o‘': 'ў',
      Gʻ: 'Ғ',
      Gʼ: 'Ғ',
      'G’': 'Ғ',
      "G'": 'Ғ',
      'G`': 'Ғ',
      'G‘': 'Ғ',
      gʻ: 'ғ',
      gʼ: 'ғ',
      'g’': 'ғ',
      "g'": 'ғ',
      'g`': 'ғ',
      'g‘': 'ғ',
      "YO'": 'ЙЎ',
      "Yo'": 'Йў',
      "yo'": 'йў',
      YO: 'Ё',
      Yo: 'Ё',
      yo: 'ё',
      YA: 'Я',
      Ya: 'Я',
      ya: 'я',
      YE: 'Е',
      Ye: 'Е',
      ye: 'е',
      YU: 'Ю',
      Yu: 'Ю',
      yu: 'ю',
      CH: 'Ч',
      Ch: 'Ч',
      ch: 'ч',
      "S'H": 'СҲ',
      "S'h": 'Сҳ',
      "s'h": 'сҳ',
      SH: 'Ш',
      Sh: 'Ш',
      sh: 'ш',
      A: 'А',
      a: 'а',
      B: 'Б',
      b: 'б',
      D: 'Д',
      d: 'д',
      F: 'Ф',
      f: 'ф',
      G: 'Г',
      g: 'г',
      H: 'Ҳ',
      h: 'ҳ',
      I: 'И',
      i: 'и',
      J: 'Ж',
      j: 'ж',
      K: 'К',
      k: 'к',
      L: 'Л',
      l: 'л',
      M: 'М',
      m: 'м',
      N: 'Н',
      n: 'н',
      O: 'О',
      o: 'о',
      P: 'П',
      p: 'п',
      Q: 'Қ',
      q: 'қ',
      R: 'Р',
      r: 'р',
      S: 'С',
      s: 'с',
      T: 'Т',
      t: 'т',
      U: 'У',
      u: 'у',
      V: 'В',
      v: 'в',
      X: 'Х',
      x: 'х',
      Y: 'Й',
      y: 'й',
      Z: 'З',
      z: 'з'
    };

    const result = convert(text, ltn_substitutions);

    this.setState({ convertedText: result });
  }

  _renderModalContent = () => (
    <View style={styles.modalContent}>
      <Text style={{ fontSize: 18, color: '#00b8a9' }}>Matn nusxasi olindi</Text>
    </View>
  );
  _hideModal() {
    setTimeout(() => this.setState({ isModalVisible: !this.state.isModalVisible }), 500);
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
            <Text style={styles.alphabetText}>Кирилл</Text>
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
          <Text style={styles.textOutputStyle} selectable numberOfLines={50} ellipsizeMode="tail">
            {this.state.convertedText}
          </Text>
          <View>
            <Modal
              isVisible={this.state.isModalVisible}
              style={styles.bottomModal}
              onModalShow={() => this._hideModal()}
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
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)'
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0
  }
});
