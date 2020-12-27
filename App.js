import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [name,setName]=useState('Tom Riddle')
  const [person, setPerson]=useState({name:'Snape', age:32})
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
  }
});
