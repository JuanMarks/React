import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginTop:60,
        backgroundColor:'darkblue'
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
        color: 'black',
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
        height:50,
        backgroundColor:'white',
        fontSize:16,
        bottom:25,
        borderRadius:20
      }
  });
  
  export default styles;