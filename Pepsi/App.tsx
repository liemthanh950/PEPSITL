import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Home from './src/Home'
import Register from './src/InforScreen/Register'
import Success from './src/Success/SuccessScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
	return (
	
		<NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            options={{
              headerShown: false
            }}
            name="Home"
            component={Home} />
          <Stack.Screen
            options={{
              headerShown: false
            }}
            name="InforScreen"
            component={Register} />
          <Stack.Screen
            options={{
              headerShown: false
            }}
            name="Success"
            component={Success} />
        </Stack.Navigator>
      </NavigationContainer>

	);
};

export default App;

const styles = StyleSheet.create({
	test: {
		flex: 1,
	}
});
