import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import styles from '../styles';
import {TextInput, Text, Button, View, TouchableOpacity } from 'react-native';

export default function Home({navigation}) {
  
    const [estado, setarEstado] = useState('leitura');
    const [anotacao, setarAnotacao] = useState('');
  
    if(estado == 'leitura'){
      return (
        <View>

          <View style={styles.botoes}>
            <Button onPress={() => navigation.navigate('Alugar')} title='casas para alugar'></Button>
            <Button onPress={() => navigation.navigate('Alugadas')} title='casas alugadas'></Button>
          </View>
          
          <StatusBar  />
        </View>
      );
    }
}