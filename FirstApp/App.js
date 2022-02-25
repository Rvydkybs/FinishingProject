import React from 'react';
import { StyleSheet, Text, View ,Button,TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native';
import index from "./components/index";
import Card from './components/Cards/Card';


export default function App() {
//görselliğe hitap eden yapılar components
//görsel olmayan çalışan yapılar apiler
  return (
    < SafeAreaView style={index.droidSafeArea}>
        <Card title="eddard" text="Memento mori..."/>
        <Card title="tesla" text="yes you can"/>
        <Card title="can bonomo" text="haydeee"/>
    </SafeAreaView>
  );
}

