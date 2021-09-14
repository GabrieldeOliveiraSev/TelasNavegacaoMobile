import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Button} from 'react-native';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function App() {

  const [number, setNumber] = useState(2);

  const navi = useNavigation();
  
  function increment(){
    setNumber(number + 5);
  }

  function naviToTela1(){
      navi.navigate('Tela1');
  }

  useEffect(()=>{
    console.log('Exectuou o useEffect');
    console.log('Novo o useEffect');
  },[number]);

  return (

    <ImageBackground source={require('../img/fundo03.jpeg')} style={styles.imageFundo}>
    <View style={styles.container}>
    <TouchableOpacity style={styles.Button} onPress={increment}>
              <Text style={styles.text}>Somatorio</Text>
          </TouchableOpacity>
    
          <Text style={styles.text}>{number}</Text>

          <View style={{flex:1,flexDirection:"row",justifyContent:'center', paddingTop:'10%'}}>
            <TouchableOpacity>
              <Button onPress={naviToTela1} title=" Voltar" color="#841584" accessibilityLabel="Learn more about this purple button"/>
            </TouchableOpacity>
          </View>

      <StatusBar style="auto" />
    </View>
    </ImageBackground>
    
  );
}

//AppRegistry.registerComponent('AppTeste', () => AppTeste);

