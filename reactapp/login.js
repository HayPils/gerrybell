import React from 'react';
import {
  StyleSheet,
  Label,
  View,
  SafeAreaView,
  Text,
  Alert,
  Container,
  TouchableOpacity,
  LinearGradient,
  Dimensions,
} from 'react-native';
import Constants from 'expo-constants';
import { Input } from 'react-native-elements';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class App extends React.Component {
  render() {
    return (
      <View style = {styles.container}>
        <Input
          label='Username:'
          onChangeText={(text) => this.setState({text})}
        />
          
        <Input
          label='Password'
          secureTextEntry = {true}
        />
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 100, 
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#656565',
    textAlign: 'center', 
    backgroundColor: '#e0e0e0',
  },
  container: {
    flex: 1,
    marginTop: Dimensions.get('window').height / 2,
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 32,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
