import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './HomePage/Homepage';
import Video from './video/Video';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Video" component={Video} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
