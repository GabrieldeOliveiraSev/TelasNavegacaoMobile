import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, AppRegistry, Alert, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function Tela2(){

    const navi = useNavigation();

    function naviToTela1(){
        navi.navigate('Tela1')
}


    return(
        <ImageBackground source={require('../img/fundo02.jpeg')} style={styles.imageFundo}>
            <View style={styles.container}>
                <View style={{flex:1,flexDirection:"row",justifyContent:'center', paddingTop:'70%'}}>
                    <TouchableOpacity>
                    <Button onPress={naviToTela1} title="Voltar" color="#841584" accessibilityLabel="Learn more about this purple button"/>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
}

//AppRegistry.registerComponent('AppTeste', () => AppTeste);