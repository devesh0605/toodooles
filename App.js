import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [name,setName]=useState('Tom Riddle')
  const [person, setPerson]=useState({name:'Snape', age:32})
  const [age, setage]=useState('30')
  const clickHandler = () => {
    setName('Voldemort')
    setPerson({name:'Harry',age:'11'})
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>
          Hello World
        </Text>
      </View>
      <View style={styles.body}>
      <Text >Lorem ipsum <Text style={styles.boldText}>Luke harper</Text> dolor sit amet</Text>
      <Text>Lorem ipsum dolor sit amet</Text>
      <Text>Lorem ipsum dolor sit amet</Text>
      </View>
      <Text>My name is {name}</Text>
      <Text>His name is {person.name} and his age is {person.age}.</Text>
      <View style={styles.buttonContainer}>
        <Button title='Updte me' onPress={clickHandler}/>
      </View>

      <Text>Enter name</Text>
      <TextInput 
      multiline
      style={styles.input}
      placeholder='eg. bing'
      onChangeText={(val)=>setName(val)}/>

      <Text>Enter age</Text>
      <TextInput 
      keyboardType='numeric'
      style={styles.input}
      placeholder='eg. 10'
      onChangeText={(val)=>setage(val)}/>
      <Text>Name:{name}, age={age}</Text>
      
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
  header : {
    backgroundColor:'pink',
    padding :20,
  },
  boldText: {
    fontWeight :'bold',
  },
  body: {
    backgroundColor: 'yellow',
    padding: 20,
  },
  buttonContainer : {
    marginTop : 20,
  },
  input: {
    borderWidth:1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width:200,
  }
});
