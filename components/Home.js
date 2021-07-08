import React, { useState, useContext } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,

} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Cities from './Cities';

export default function AssetExample({ navigation }) {
  const [count, setCount] = useState(0);
  const [country, setcountry] = useState('');
  
  const [array, setArray] = useState([]);
  const [city, setcity] = useState('');
  var myArray = [{ country: 'Pak', city: 'isb' }];

  const handleClick = async (country, city) => {
    var count=0;
    var myArray = [{ id:'0', country: 'Pak', city: 'isb' }];
     await AsyncStorage.setItem('Array', myArray);
    var carray = await AsyncStorage.getItem('Array');
    setCount(carray.length)
    console.log(carray);
    alert(cityArray.country);
    let cityArray = await JSON.parse(carray);
    alert(cityArray.country);
    var row = { id:count+1, country: country, city: city, locations: [] };
    cityArray.push(row);
    AsyncStorage.setItem('Array', cityArray);
    console.log(cityArray);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your Country"
        onChangeText={(text) => setcountry(text)}
        value={setcountry}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your city"
        keyboardType="string"
        onChangeText={(text) => setcity(text)}
        value={setcity}
      />
      <TouchableOpacity
        style={styles.button}
      >
        <Text style={styles.head}>
          Add City
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
      >
        <Text style={styles.head} onPress={() => navigation.navigate('Cities')}>
          View City List
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    marginBottom: 120,
  },
  input: {
    width: 300,
    outline: "none",
    padding: 10,
    margin: 5,
    borderColor: "lightgray",
    borderRadius: "3px",
    borderWidth: 1
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    marginBottom: 10,
    marginTop:10,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  head: {
    color: 'white',
    fontSize: 15,
  },
});
