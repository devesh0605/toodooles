import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {ScrollView, Button, StyleSheet, Text, View, TextInput, FlatList } from 'react-native';

export default function App() {
  const [name,setName]=useState('Tom Riddle')
  const [person, setPerson]=useState({name:'Snape', age:32})
  const [age, setage]=useState('30')
  const clickHandler = () => {
    setName('Voldemort')
    setPerson({name:'Harry',age:'11'})
  }
  const [people,setPeople]=useState([
    {pname: 'chandler',id:'1'},
    {pname: 'monica',id:'2'},
    {pname: 'ross',id:'3'},
    {pname: 'raechal',id:'4'},
    {pname:  'joey',id:'5'},
    {pname: 'pheobe',id:'6'},
  ])
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


      <FlatList
      numColumns={2}
      keyExtractor={(item)=>item.id}
      data = {people}
      renderItem ={({item})=>(
        <Text style={styles.item}>{item.pname}</Text>

      )}
      />
      
      
      
      <ScrollView>

      {people.map(item=>(
          <View key={item.key}>
            <Text style={styles.item}>{item.pname}</Text>
          </View>
        )
       )}
           </ScrollView>

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
  },
  item : {
    marginTop : 24,
    padding:30,
    backgroundColor:'green',
    fontSize:30,
    marginHorizontal:10,
    marginHorizontal:24,

  }
});
