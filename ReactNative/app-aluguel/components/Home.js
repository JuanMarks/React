import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import styles from '../styles';
import {TextInput, Button, Text, View, TouchableOpacity } from 'react-native';

export default function Home() {
  
    const [estado, setarEstado] = useState('leitura');
    const [anotacao, setarAnotacao] = useState('');
  
    if(estado == 'leitura'){
      return (
        <View style={styles.container}>
          <View style={styles.header}><Text style={styles.textHeader}>Aplicativo Aluguel</Text></View>
  
          <View><Text style={styles.anotacao}>{anotacao}</Text></View>
  
          <TouchableOpacity onPress={()=> setarEstado('atualizando')} style={styles.btnAnotacao}><Text style={styles.btnAnotacaoText}>+</Text></TouchableOpacity>
          <StatusBar style="auto" />
        </View>
      );
    }else if(estado == 'atualizando'){
      return (
        <View style={styles.container}>
            <View style={styles.header}><Text style={styles.textHeader}>Aplicativo Aluguel</Text></View>
    
            <View><Text style={styles.anotacao}>Nome</Text></View>
    
            <View style={{padding:20}}><TextInput
            style={styles.textArea}
            onChangeText={(text)=>setarAnotacao(text)}
            value={anotacao}
            multiline={true}
            numberOfLines={4}></TextInput></View>

            <View><Text style={styles.anotacao}>Valor do Aluguel</Text></View>
            
            <View style={{padding:20}}><TextInput
            style={styles.textArea}
            onChangeText={(text)=>setarAnotacao(text)}
            value={anotacao}
            multiline={true}
            numberOfLines={4}></TextInput></View>
  
            <TouchableOpacity onPress={()=> setarEstado('leitura')} style={styles.btnSalvar}><Text style={styles.btnAnotacaoText}>=</Text></TouchableOpacity>
            <StatusBar style="auto" />
        </View>
      );
    }
}