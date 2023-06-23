import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import styles from '../styles';
import {TextInput, Text, Button, View, TouchableOpacity } from 'react-native';


export default function AlugarInput({navigation}){
    return(
        <View>
    
            <View><Text style={styles.anotacao}>Nome:</Text></View>
    
            <View style={{padding:20}}><TextInput
            style={styles.textArea}
            onChangeText={(text)=>setarAnotacao(text)}
            
            multiline={true}
            numberOfLines={4}></TextInput></View>

            <View><Text style={styles.anotacao}>Valor do Aluguel:</Text></View>
            
            <View style={{padding:20}}><TextInput
            style={styles.textArea}
            onChangeText={(text)=>setarAnotacao(text)}
            
            multiline={true}
            numberOfLines={4}></TextInput></View>

            <View><Text style={styles.anotacao}>Dia em que foi alugada:</Text></View>
            
            <View style={{padding:20}}><TextInput
            style={styles.textArea}
            onChangeText={(text)=>setarAnotacao(text)}
                
            multiline={true}
            numberOfLines={4}></TextInput></View>
    
            <TouchableOpacity onPress={()=> setarEstado('leitura')} style={styles.btnSalvar}><Text style={styles.btnAnotacaoText}>=</Text></TouchableOpacity>
            <StatusBar style="auto" />
        </View> 
    );
}