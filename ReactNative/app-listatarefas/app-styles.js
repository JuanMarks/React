import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    
      image:{
        width:'100%',
        height:100,
        resizeMode:'cover',
        justifyContent:'center'
    },
    
      textHeader:{
        marginLeft:'34%',
        marginTop:'10%',
        fontSize:20,
        fontWeight:'bold'
        
    },

    tarefaSingle:{
        marginTop:30,
        width:'100%',
        borderBottomWidth:1,
        borderBottomColor:'black',
        flexDirection:'row',
        paddingBottom:10,

    },

    deleteIcon:{
        alignItems:'flex-end',
        flex:1,
        padding:10,
    },

    textTarefa:{
        marginLeft:10,
        fontSize:15,
    }
  });
  
  export default styles;