import { Modal, View, StyleSheet, Text, Pressable, TextInput } from "react-native";
import { useState } from "react";
import taref from "./tarefas";

export default function ModalApp(){
    const [modalVisible, setModalVisible] = useState(false);
    const [tarefaAtual, setarTarefaAtual] = useState('')
    const [tarefas,setarTarefas] = useState(taref)

    function addTarefa(){
        setModalVisible(!modalVisible)
        let id = 0;
        if(tarefas.length > 0){
            id = tarefas[tarefas.length-1].id + 1
        }
        let tarefa = {id:id, tarefa:tarefaAtual}
        setarTarefas([...tarefas,tarefa])
        
    }
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
            }}>

                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Nome da Tarefa</Text>
                        <View style={styles.textInput}>
                            <TextInput onChangeText={text => setarTarefaAtual(text)} style={{marginLeft:15, color:'white'}}></TextInput>
                        </View>

                        <View style={{marginTop:10}}>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => addTarefa()}>
                                <Text style={styles.textStyle}>Salvar</Text>
                                
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>

            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}>
                <Text style={styles.textStyle}>Adcionar Tarefa</Text>
            </Pressable>
        </View>
    );
  };
  
  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },

    textInput:{
        backgroundColor:'purple',
        width:200,
        borderRadius:20,
        padding:5
        
    },

    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },

    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },

    buttonOpen: {
      backgroundColor: 'purple',
    },

    buttonClose: {
      backgroundColor: '#2196F3',
    },

    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },

    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },

});