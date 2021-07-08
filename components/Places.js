import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TextInput,  TouchableOpacity, FlatList, ScrollView, SafeAreaView } from 'react-native';
  
const DATA = [
  {
    id: '1',
    title: ' Item',
  },
  {
    id: '2',
    title: 'Second Item',
  },
  {
    id: '3',
    title: 'Third Item',
  },
];
const index = 0;
const Item = ({ title }) => (
  <View style={styles.scrollItem}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
 const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
export default function Places({navigation}) {
  const [name, setName] = useState('');
  const [info, setInfo] = useState('');
  const [array,setArray ] = useState([]);
	const updateLocation = () => {
		alert('Location name and info added!');
		navigation.navigate('Cities');
		array[index].locations.push({name: name, info: info});
		setArray(array);
	}
  return (
    
   <ScrollView style={styles.scrollview}>
   <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

     <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        < TouchableOpacity title={'Back'} onPress={() => navigation.navigate('Cities')} />
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>
          {array[index].city}
        </Text>
        <View />
      </View>
      <View>
        {array[index].locations.length > 0 ? (
          array[index].locations.map((value, index) => (
            <View key={index}>
              <View
                style={{
                  borderStyle: 'solid',
                  borderColor: 'red',
                  borderWidth: 2,
                  margin: 5,
                }}>
                <Text>{value.name}</Text>
                <Text>{value.info}</Text>
              </View>
            </View>
          ))
        ) : (
          <Text>No location for this city!</Text>
        )}
      </View>
      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Info"
        onChangeText={text => setInfo(text)}
      />
      <TouchableOpacity title={'Add Location'} onPress={updateLocation} />
    </ScrollView>

    
  );
}

const styles = StyleSheet.create({
  input: {
    alignItems: "center",
    height: 40,
    margin: 12,
    borderWidth: 1,
    width: 200
  },
  scrollItem:{
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: '#008080',
    width: "90%",
    height: 50,
    padding: 10,
    margin: 10,
    borderRadius: 30,
    alignSelf: "center"
  },
  scrollview:{
    width: "100%",
    height: "100%",
  },
  title:{
    color: "white",
    fontSize: 15
  }
});
