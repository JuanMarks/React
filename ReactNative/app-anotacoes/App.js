import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {TextInput, Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';



export default function App() {
  const [estado, setarEstado] = useState('leitura');
  const [anotacao, setarAnotacao] = useState('');

  if(estado == 'leitura'){
    return (
      <View style={styles.container}>
        <View style={styles.header}><Text style={styles.textHeader}>Aplicativo Anotação</Text></View>
        {
          (anotacao != '')?
            <View style={{padding:20}}><Text style={styles.anotacao}>{anotacao}</Text></View>
          :
          <View style={{padding:20}}><Text>Nenhuma anotação encontrada</Text></View>
        }
        
        {
          (anotacao != '')?
          <TouchableOpacity onPress={()=> setarEstado('atualizando')} style={styles.btnAnotacao}><Text style={styles.btnAnotacaoText}>Ed</Text></TouchableOpacity>
          :
          <TouchableOpacity onPress={()=> setarEstado('atualizando')} style={styles.btnAnotacao}><Text style={styles.btnAnotacaoText}>+</Text></TouchableOpacity>
        }
        
        <StatusBar style="auto" />
      </View>
    );
  }else if(estado == 'atualizando'){
    return (
      <View style={styles.container}>
        <View style={styles.header}><Text style={styles.textHeader}>Aplicativo Anotação</Text></View>
      
        <View><Text style={styles.anotacao}>Digite sua Anotação</Text></View>

        <TextInput
        style={styles.textArea}
        onChangeText={(text)=>setarAnotacao(text)}
        value={anotacao}
        multiline={true}
        numberOfLines={4}></TextInput>

        <TouchableOpacity onPress={()=> setarEstado('leitura')} style={styles.btnSalvar}><Text style={styles.btnAnotacaoText}>=</Text></TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:60,
  },

  header:{
    width:'100%',
    padding:10,
    backgroundColor:'#069',

  },

  textHeader:{
    textAlign:'center', 
    color:'white',
    fontSize:20,
  }, 

  anotacao:{
    textAlign:'center',
    fontSize: 18,
    padding:20,
    color: 'red',
  },

  btnAnotacao:{
    position: 'absolute',
    right: 10,
    bottom: -650,
    width: 50,
    height:50,
    backgroundColor:'#069',
    borderRadius: 25
    
    
  },

  btnSalvar:{
    position: 'absolute',
    right: 10,
    bottom: -350,
    width: 50,
    height:50,
    backgroundColor:'#069',
    borderRadius: 25
    
    
  },

  btnAnotacaoText:{
    color:'white',
    position: 'relative',
    textAlign:'center',
    top:3,
    fontSize:30

  },

  textArea:{
    padding:20,
    textAlignVertical:'top',
    height:300,
    backgroundColor:'grey',
    fontSize:16
  }
});
