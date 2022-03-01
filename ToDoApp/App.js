import { Text, View,Button,TextInput,FlatList, Alert } from 'react-native';
import { useEffect, useState } from 'react';
import styles from "./components/Title/title.style";
import List from './List';
import { TouchableOpacity } from 'react-native';

export default function App() {
 
 const[toDoCount,setToDoCount]=useState(0);
 const[toDoItems,setToDoItems]=useState([]);
 const[showItems,setShowItems]=useState(false);
 const[toDoValue,setToDoValue]=useState("");

 useEffect(()=>{
  const newToDoList=toDoItems.filter(item=>item.pressed===false);
  const length=newToDoList.length;
  setToDoCount(length);
},[toDoItems]);

  const deleteItem=(item)=>{
    setToDoItems(toDoItems.filter(toDoItem=>toDoItem!==item));
  };

  const newRenders=({item})=>{
    <TouchableOpacity
     onPress={()=>{changeStyle(item.id)}}
    onLongPress={()=>{deleteItem(item)}}
    >
    <List props={item} press={item.pressed}></List>;
    </TouchableOpacity>
  };

  const  changeStyle=(id)=>{
    const newToDo=toDoItems.map(item=>{
      if(item.id===id){
        return{...item,pressed:true};
      }
      return item;
    })
    setToDoItems(newToDo);
  };

  const save=(item)=>{
    if(item===""){
      return Alert.alert("please fill the blanks");
    }
    else{
      const newToDo={
      id: new Date().getTime().toString(),
      title:toDoValue,
      pressed:false,
     }
    
    setToDoItems([...toDoItems,newToDo]);
    setToDoValue("");}
  };

    return (
    <View style={styles.outContainer} >
    
      <View style={styles.columnView}>

          <View style={styles.container}>
            <Text style={styles.title}>TO DO LİST</Text>
            <View style={styles.innerContainer}>
              <Text style={styles.title}>{toDoCount}</Text>
            </View>
          </View>
          <FlatList
            keyExtractor={item=>item.id}
            data={toDoItems}
            renderItem={newRenders}>
           </FlatList> 
          <View style={styles.bottomContainer}> 
            <TextInput placeholder="To Do..." style={styles.input} value={toDoValue} onChangeText={setToDoValue}></TextInput>
       
            <View style={styles.buttonContainer}>
              <Button style={styles.button} title="Save" setToDo={setToDoItems} toDo={toDoItems} color={"#6b7e93"}  onPress={save}>
              </Button>
            </View>
          </View>


      </View>


    </View>
  );
}

