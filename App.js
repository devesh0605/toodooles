import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoitem';

export default function App() {

  const [todo,setTodos]=useState([
    {text:'buy coffee',key:'1'},
    {text:'create app',key:'2'},
    {text:'play PUBG',key:'3'},
  ])
  
  const pressHandler = (key) => {
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo=>todo.key!=key)
    })
  }
 

  return (
    <View style={styles.container}>
      <Header/>

      <View style={styles.content}>

        <View style={styles.list}>
        <FlatList
      
      keyExtractor={(item)=>item.key}
      data = {todo}
      renderItem ={({item})=>(
        <TodoItem item ={item} pressHandler={pressHandler}/>

      )}
      />

        </View>

      </View>
     
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  content : {
    padding: 40,
  },
  list: {
    marginTop:20
  },
  

});
