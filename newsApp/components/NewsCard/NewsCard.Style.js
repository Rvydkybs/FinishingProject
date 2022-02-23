import { StyleSheet,Dimensions } from "react-native";//Dimensions cihazın ekran büyüklüğünü öğrenmek için
export default StyleSheet.create({
    container:{
       backgroundColor:"white",
        margin:10,
        borderRadius:10,

    },
    image:{
        height:Dimensions.get('window').height/4,
        borderTopRightRadius:10,
        borderTopLeftRadius:10,

    },
    title:{
        fontWeight:"bold",
        fontSize:20
     },
    description:{},
    innerContainer:{
        padding:5
    },
    author:{
        fontStyle:"italic",
        textAlign:"right",
    }
})

