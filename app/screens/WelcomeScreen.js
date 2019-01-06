import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

export default class WelcomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>WelcomeScreen</Text>
        <Button
          title={'Dasturni ochish'}
          containerViewStyle={{ marginTop: 10 }}
          buttonStyle={{
            backgroundColor: '#c84343',
            borderRadius: 5,
            marginTop: 20
          }}
          titleStyle={{ color: 'white' }}
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
