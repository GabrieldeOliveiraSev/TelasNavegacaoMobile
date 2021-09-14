import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, AppRegistry, Alert, Button} from 'react-native';
import { NavigationContainer, useNavigation} from '@react-navigation/native';
import styles from './styles';



export default function Menu(){

    const onButtonPress2 = () => {
        Alert.alert('Você foi direcionado para Tela2');
        navi.navigate('Tela2')
    };

    const onButtonPress3 = () => {
        Alert.alert('Você foi direcionado para Tela3');
        navi.navigate('Tela3')
    };

    const onButtonPress4 = () => {
        Alert.alert('Você foi direcionado para Tela4');
        navi.navigate('Tela4')
    };

    const navi = useNavigation();

    function naviToTela3(){
        navi.navigate('Tela3')
    }

    function naviToTela2(){
        navi.navigate('Tela2')
    }

    function naviToTela4(){
        navi.navigate('Tela4')
    }

    return( 

        <ImageBackground source={require('../img/fundo01.jpeg')} style={styles.imageFundo}>
            <View style={{flexDirection:'column',flex:1}}>
       
            <View style={{flex:1,flexDirection:"row",justifyContent:'center', paddingTop:'60%'}}>
                <TouchableOpacity>
                    <Button onPress={onButtonPress2} title="Tela 2" color="#841584" accessibilityLabel="Learn more about this purple button"/>
                </TouchableOpacity>
            </View>
                
            <View style={{flex:1,flexDirection:"row",justifyContent:'center'}}>
                <TouchableOpacity>
                    <Button onPress={onButtonPress3} title="Tela 3" color="#841584" accessibilityLabel="Learn more about this purple button"/>
                </TouchableOpacity>
            </View>

            <View style={{flex:5,flexDirection:"row",justifyContent:'center'}}>
                <TouchableOpacity>
                    <Button onPress={onButtonPress4} title="Tela 4" color="#841584" accessibilityLabel="Learn more about this purple button"/>
                </TouchableOpacity>
            </View>          
            
            </View>
        </ImageBackground>
  
);
}

//AppRegistry.registerComponent('AppTeste', () => AppTeste);