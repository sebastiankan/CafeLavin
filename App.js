import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { useEffect } from 'react';
import * as Location from 'expo-location';

export default function App() {

  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(()=> {
    load()
  }, [])
  async function load() {
    try {
      let { status } = await Location.requestPermissionsAsync()

      if (status != 'granted') {
        setErrorMessage('Access to location is needed to run the app!')
        return
      }
      const location = await Location.getCurrentPositionAsync({accuracy:Location.Accuracy.High})
      console.log("here")

      const {latitude, longitude} = location.coords

      alert(`Latitide: ${latitude}, Longitude: ${longitude}`)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <View style={styles.container}>
      <Text>Hello, this is cafe Lavin</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
