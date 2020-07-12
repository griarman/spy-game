import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';

import store from './store';

import { Category } from './src/Screens';
import {SafeAreaProvider} from "react-native-safe-area-context";

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
         <Stack.Navigator>
           <Stack.Screen
             name="Category"
             component={Category}
             options={{
               headerTransparent: true,
               headerTitle: () => null,
               headerStyle: { height: 0 }
             }}
           />
         </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({

});

export default App;
