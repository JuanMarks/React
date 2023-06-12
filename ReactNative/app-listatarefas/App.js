import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './app-styles';
import React, { useState } from 'react';
import ModalApp from './Modal';
import taref from './tarefas';

export default function App() {
  image = require('./assets/caderno-plano-com-lista-de-tarefas-na-mesa.jpg')
  const [tarefas,setarTarefas] = useState(taref)
  
  
  function deletarTarefa(id){
    alert(`tarefa deletada ${id}`)
    let newTarefas = tarefas.filter(function(val){
      return val.id != id;
    });
    setarTarefas(newTarefas)
  }

  return (
    <ScrollView style={styles.container}>

      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.textHeader}>Lista de Tarefas</Text>
      </ImageBackground>

      {
        tarefas.map(function(val){
          return(
            <View style={styles.tarefaSingle}>
                <View style={{flex:1, width:'100%', padding:10}}>
                  <Text style={styles.textTarefa}>{val.tarefa}</Text>
                </View>
                <View style={styles.deleteIcon}>
                  <TouchableOpacity onPress={()=>deletarTarefa(val.id)}><MaterialIcons name="delete" size={24} color="black" /></TouchableOpacity>
                </View>
            </View>
          )
        })
      }
      
      <ModalApp></ModalApp>
    </ScrollView>
  );
}

