import React from 'react'
import {StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height:80,
        paddingTop:38,
        backgroundColor:'#228B22'
    },
    title:{
        textAlign:'center',
        color:'#fff',
        fontSize:20,
        fontWeight:'bold',
    }

})