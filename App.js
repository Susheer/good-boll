import React from 'react';

import { LogBox , StatusBar} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as theme from './src/constants/theme'

import Home from './src/screens/home';
import Profile from './src/screens/profile'

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor={theme.colors.lightWhite}/>
    <NavigationContainer>   
      <MyStack/>
    </NavigationContainer>
    </>
  );
};

LogBox.ignoreAllLogs();

export default App;
