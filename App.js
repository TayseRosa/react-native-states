
/*
  Developed by: Tayse Rosa
  Date: 05/05/2021
  Link: https://github.com/TayseRosa/react-native-states
*/

import React, { useState }  from 'react';
import { StyleSheet, View, Text, Button, TextInput, } from 'react-native';

export default function App(){

  const [ name, setName ] = useState('');
  const [ age, setAge ] = useState();
  const [ info, setInfo ] = useState('Digite aqui...');

  function whatsName(){
    setName('Tayse Rosa')
  }

  function whatsAge(){
    setAge('33');
  }
  

  return(
    <>
      <View style={styles.container}>
        <Text style={styles.headerTitle} > REACT NATIVE </Text>
        <Text style={styles.headerSubtitle} > STATES </Text>
      </View>

      <View style={styles.container} >
        <Button title="Whats my name? Click here" onPress={whatsName}  />
          <Text style={styles.answer} > {name} </Text>
      </View>

      <View style={styles.container} >
        <Button title="Whats is my age? Click here" onPress={whatsAge}  />
          <Text style={styles.answer} > {age} </Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.headerSubtitle} >Insert infos</Text>
          <TextInput style={styles.textInput}  value={info}  onChangeText={i=>setInfo(i)} />  
        <Text style={styles.headerSubtitle} > Você digitou: {info} </Text>
      </View>
      
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1, 
    justifyContent:'center',
    alignItems:'center',
  },
  headerTitle:{
    fontSize:24
  },
  headerSubtitle:{
    fontSize:20
  },
  textInput:{
    width:200,
    height:50,
    borderWidth:3,
    borderStyle: 'solid', 
    borderColor:'#b656a1',
    paddingLeft:20,
    paddingRight:20,
    color:'#b656a1',
    fontSize:20
  },
  answer:{
    fontSize:20,
    color: '#b656a1'
  }
});