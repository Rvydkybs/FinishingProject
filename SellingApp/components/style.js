import {StyleSheet} from "react-native";

export default  StyleSheet.create({
container:{
    marginTop:40,
    flexDirection:"row",//???????????????????
    flex:1,
    justifyContent:"flex-start",
},
title:{
    fontSize:18,
    fontWeight:"bold"
},
price:{
    fontWeight:"bold"
},
image:{
    width:100, height:100,
    borderWidth:3,
    borderRadius:10,
    backgroundColor:"white",
   borderBottomLeftRadius:10,
   borderBottomRightRadius:10,
},
innerContainer:{
    padding:3,
    marginLeft:2,
    borderWidth:1,
    borderRadius:10,
    width:180,
    height:150,
    backgroundColor:"#a1caff",
    borderColor:"#a1caff",
},
search:{
    padding:3,marginLeft:5,
    marginTop:12,
    borderColor:"darkblue",
    borderWidth:2,
    borderRadius:8,
    width:380,
    height:50,
    fontSize:25
},
storeTitle:{
    fontSize:30,
    fontWeight:"bold",
    marginTop:30,
    padding:5,
}


})

