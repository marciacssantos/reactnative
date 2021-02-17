import React from 'react'
import { View, Text, StatusBar} from 'react-native'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from './src/screens/Home'
import Login from './src/screens/Login'
import Produtos from './src/screens/Produtos'

const Drawer = createDrawerNavigator()

function App(){
  return(
    <NavigationContainer>
      <StatusBar />
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Produtos" component={Produtos} />

      </Drawer.Navigator>
    </NavigationContainer>
    
  )
}

export default App