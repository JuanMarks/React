import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import styles from '../styles';
import {TextInput, Text, Button, View, TouchableOpacity } from 'react-native';


export default function Alugadas({navigation}){
    return(
        <View style={{padding:10}}>
            <View style={styles.boxCasas}>
                <Text style={styles.txtCasas}>Casa 01</Text>
                <View style={styles.btnCasas}>
                    <Button onPress={() => navigation.navigate('Alugando')} title='Alugar'></Button>
                    <Button onPress={() => navigation.navigate('Detalhes')} color={'purple'} title='Editar'></Button>
                    <Button onPress={() => navigation.navigate('Alugando')} color={'red'} title='Excluir'></Button>
                </View>
                
            </View>

            <View style={styles.boxCasas}>
                <Text style={styles.txtCasas}>Casa 02</Text>
                <View style={styles.btnCasas}>
                    <Button onPress={() => navigation.navigate('Alugando')} title='Alugar'></Button>
                    <Button onPress={() => navigation.navigate('Detalhes')} color={'purple'} title='Editar'></Button>
                    <Button onPress={() => navigation.navigate('Alugando')} color={'red'} title='Excluir'></Button>
                </View>
                
            </View>

            
        </View> 
    );
}