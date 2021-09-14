import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';


const AppStack = createNativeStackNavigator();

import Menu from './screens/Menu';
import Tela2 from './screens/Tela2';
import Tela3 from './screens/Tela3';
import Tela4 from './screens/Tela4';

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator>
                <AppStack.Screen name='Tela1' component={Menu}/>
                <AppStack.Screen name='Tela2' component={Tela2}/>
                <AppStack.Screen name='Tela3' component={Tela3}/>
                <AppStack.Screen name='Tela4' component={Tela4}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}
