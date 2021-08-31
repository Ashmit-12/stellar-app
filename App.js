
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen'
import DailyPic from  './screens/DailyPic'
import SpaceCrafts from './screens/SpaceCrafts'
import StarMap from './screens/StarMap'
import IssLocationScreen from './screens/ISSLocationScreen';
import MeteorScreen from './screens/MeteorScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack=createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" 
      screenOptions={{headerShown:false}}
      >
<Stack.Screen name="Home" component={HomeScreen}/>
<Stack.Screen name="Crafts" component={SpaceCrafts}/>
<Stack.Screen name="Map" component={StarMap}/>
<Stack.Screen name="Picture" component={DailyPic}/>
<Stack.Screen name="ISSLocation" component={IssLocationScreen}/>
<Stack.Screen name="Meteor" component={MeteorScreen}/>


      </Stack.Navigator>
    </NavigationContainer>
  );
}

