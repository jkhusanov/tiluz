import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  Linking,
  Share,
  Image
} from 'react-native';
import { Ionicons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

/** TODO
 * Ko'chirligan matnni inputga avtomatik kiritish
 * Default letters
 * Choose app language
 */
const iosURL = 'https://itunes.apple.com/app/id1450669279';
const androidURL = 'https://play.google.com/store/apps/details?id=com.reactmixer.tiluz';
export default class SettingsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Sozlamalar',
    headerTintColor: 'white',
    headerTitleStyle: {
      fontSize: 20,
      fontWeight: 'bold'
    },
    headerStyle: {
      backgroundColor: '#374FF5',
      borderBottomWidth: 0.5,
      borderBottomColor: '#aaaaaa'
    }
  });
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.feedbackContainer}>
          <View style={styles.logoContainer}>
            <Text style={styles.appName}>Tiluz</Text>
            <Text style={styles.appDescription}>Oʻzbekzabon foydalanuvchilar uchun</Text>
          </View>
          <View style={styles.reviewContainer}>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(Platform.OS === 'ios' ? iosURL : androidURL).catch(err =>
                  console.error('An error occurred', err)
                )
              }
            >
              <View style={styles.moreInfoContainer}>
                <View>
                  <Ionicons
                    name="ios-star-outline"
                    color={'#374FF5'}
                    size={Platform.OS === 'ios' ? 26 : 25}
                  />
                </View>
                <View style={styles.callText}>
                  <Text>Ilovani baholang</Text>
                </View>
                <View style={styles.linkArrowContainer}>
                  <Entypo
                    name="chevron-right"
                    color={'#374FF5'}
                    size={Platform.OS === 'ios' ? 26 : 25}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.shareBox}
            onPress={() => {
              Share.share({
                message:
                  'Oʻzbek tili yordamchisi ' + (Platform.OS === 'ios' ? 'Tiluz' : androidURL),
                url: iosURL,
                title: 'Tiluz'
              }).catch(err => console.log(err));
            }}
          >
            <MaterialCommunityIcons
              name="share"
              size={Platform.OS === 'ios' ? 22 : 23}
              style={{ marginRight: 15 }}
              color={'#374FF5'}
            />
            <Text>Ilovani doʻstlaringiz bilan ulashing</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.authorContainer}>
          <Text style={styles.authorText}>Made with </Text>
          <Ionicons
            name="ios-heart-empty"
            size={Platform.OS === 'ios' ? 18 : 19}
            style={styles.copyButtonIconStyle}
            color={'#c5c5c5'}
          />
          <Text style={styles.authorText}> by JK</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  feedbackContainer: {
    flex: 10,
    backgroundColor: 'white'
  },
  logoContainer: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  reviewContainer: {
    flex: 2
  },
  shareBox: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    borderWidth: 0.5,
    borderColor: '#374FF5',
    borderRadius: 10,
    alignItems: 'center'
  },
  authorContainer: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center'
  },

  authorText: {
    fontSize: 14,
    color: '#c5c5c5'
  },
  moreInfoContainer: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    paddingLeft: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#c5c5c5'
  },
  linkArrowContainer: {
    position: 'absolute',
    right: 0,
    paddingRight: 10
  },
  callText: {
    paddingHorizontal: 10
  },
  appName: {
    fontSize: 50,
    color: '#374FF5'
  },
  appDescription: {
    fontSize: 15
  }
});
