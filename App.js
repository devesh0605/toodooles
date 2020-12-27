import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  
  const [people,setPeople]=useState([
    {pname: 'chandler',id:'1'},
    {pname: 'monica',id:'2'},
    {pname: 'ross',id:'3'},
    {pname: 'raechal',id:'4'},
    {pname:  'joey',id:'5'},
    {pname: 'phebe',id:'6'},
  ])
  return (
    <View style={styles.container}>
      <FlatList
      numColumns={2}
      keyExtractor={(item)=>item.id}
      data = {people}
      renderItem ={({item})=>(
        <TouchableOpacity>
        <Text style={styles.item}>{item.pname}</Text>
        </TouchableOpacity>
      )}
      />
      
      
      
    
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
item : {
    marginTop : 24,
    padding:30,
    backgroundColor:'green',
    fontSize:30,
    marginHorizontal:10,
    marginHorizontal:24,

  },
});
