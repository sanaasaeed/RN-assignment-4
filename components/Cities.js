import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TextInput,  TouchableOpacity, FlatList, ScrollView, SafeAreaView, AsyncStorage } from 'react-native';

export default function Cities({navigation}) {
  
  var carray=  AsyncStorage.getItem('Array');
     let cityArray = JSON.parse(carray);
     console.log(cityArray);
const Item = ({ title }) => (
  <View style={styles.scrollItem}>
    <Text style={styles.title} onPress={() =>
            navigation.navigate('Places')}>{title}</Text>
  </View>
);
 const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
   <ScrollView style={styles.scrollview}>
   <FlatList
        data={cityArray.city}
        renderItem={renderItem}
        keyExtractor={item => item.id}

      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
