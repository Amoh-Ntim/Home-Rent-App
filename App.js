import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createDrawerNavigator } from '@react-navigation/Drawer';
import Home from './components/Home';
import Details from './components/Details';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Drawer.Screen name="Details" component={Details} options={{ headerShown: false }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
