import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import Details from './screens/Details';
import Home from './screens/Home';
import Villagers from './screens/Villagers';
import Cam from './screens/Camera';
import {SafeAreaView} from 'react-native-safe-area-context';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{title: 'Accueil'}}></Stack.Screen>
          <Stack.Screen
            name="Villagers"
            component={Villagers}
            options={{title: 'Villageois'}}></Stack.Screen>
          <Stack.Screen
            name="Details"
            component={Details}
            options={{title: 'Détails'}}></Stack.Screen>
          <Stack.Screen
            name="Camera"
            component={Cam}
            options={{title: 'Caméra'}}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

// modal for camera
// notification
// document picker
// component for button?
// record video demo
//SafeAreaProvider?

export default App;
