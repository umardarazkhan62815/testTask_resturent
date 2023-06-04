import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Screens/Home';
import OneProdcut from './src/Screens/OneProduct';
import SplashScreen from './src/Screens/SplashScreen';


const App = () => {
  const Stack = createNativeStackNavigator();

  const StackScreens = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false }} name="SplashScreen" component={SplashScreen} />
          <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
          <Stack.Screen options={{ headerShown: false }} name="OneProduct" component={OneProdcut} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  return (
    <StackScreens />
  )
};


export default App;
