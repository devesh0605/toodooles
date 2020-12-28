import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AddTodo from './components/addTodo';
import Header from './components/header';
import Sandbox from './components/sandbox';
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

  const submitHandler = (text)=>{

    if (text.length > 3){
      setTodos((prevTodos)=>{
        return [
          {text:text,key:Math.random().toString()},
          ...prevTodos
        ]
      })

    }else{
      Alert.alert('WHOOPS!','Set bigger goals please!',[
        {text:'Understood',onPress:()=>console.log('alert closed')}
      ])
    }
    
  }
 

  return (
    //<Sandbox/>
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss()
      console.log('dismissed keyboard')
    }}>
    <View style={styles.container}>
      <Header/>

      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}/>
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
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#90EE90',
    
  },
  content : {
    padding: 40,
    flex:1,
  },
  list: {
    marginTop:20,
    backgroundColor:'yellow',
    flex:1
  },
  

});
