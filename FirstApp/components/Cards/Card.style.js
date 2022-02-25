import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container:{
        marginTop:30,
        backgroundColor:'white',
        margin:10,//dıştan boşluk
        borderWidth:1,
        borderColor:'grey',
        borderRadius:10//kenarları yumuşattık
      },
      body:{
        padding:4,//içten boşluk
      },
      title:{
        fontSize:25,
        fontWeight:'bold',//kalın yazı
        margin:10
      },
      text:{
        fontSize:18,
        margin:15,
      },
      button:{
        backgroundColor:'#00C2FF',
        padding:10,
        alignItems:'center',
        borderBottomLeftRadius:10,//button kenarları divden taşmasın
        borderBottomRightRadius:10
      },
      button_title:{
        fontSize:18,
        fontWeight:'bold'
      }
})