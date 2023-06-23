import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import styles from '../styles';
import {TextInput, Text, Button, View, TouchableOpacity } from 'react-native';


export default function Detalhes({navigation}){
    return(
        <View style={{padding:10}}>
            <Text>Casa 01</Text>
            <Text>Alugada por: Aline</Text>
            <Text>Alugada dia: 10/06/2023</Text>
            <Text>R$ 350.00</Text>
        </View> 
    );
}