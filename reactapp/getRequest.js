import React from 'react';
import {
  Button,
  StyleSheet,
  Label,
  View,
  SafeAreaView,
  Text,
  Alert,
  Container,
  TouchableOpacity
} from 'react-native';
import Constants from 'expo-constants';
import * as axios from 'axios';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        
        <Button
          title="Press me"
          color="#f194ff"

          onPress={() => axios.get('http://24.240.32.130/').then(function (response) { console.log(response);
          })}
        />
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Simple Button pressed')}>
          <Text style={styles.title}>Open Door</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
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
    marginTop: Constants.statusBarHeight,
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
