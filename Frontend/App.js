import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chat from './pages/Chat';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Register from './pages/Register';
import Login from './pages/Login';
import Contacts from './pages/Contacts';

const stack = createNativeStackNavigator();
export default function App() {
  
  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#6b8e23',
      accent: '#6b8e23',
    },
  };

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <stack.Navigator screenOptions={{ headerShow: true }}>

          <stack.Screen name="Register" component={Register}/>
          <stack.Screen name="Login" component={Login}/>
          <stack.Screen name="Chat" component={Chat}/>
          <stack.Screen name="Contacts" component={Contacts}/> 
          
        </stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}

