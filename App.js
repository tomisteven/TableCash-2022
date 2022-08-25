import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// componentes
import Home from "./screens/home/Home"
import Months from './screens/bills/Months';




const Stack = createNativeStackNavigator();

function MySlack() {
  return (
    <Stack.Navigator>

      <Stack.Screen name="inicio" options={{
        headerShown: false
      }} component={Home} />

      <Stack.Screen name="charts" options={{
              headerShown: false
            }} component={Home} />

      <Stack.Screen name="bills" options={{
              headerShown: false
            }} component={Months} />

    


    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MySlack/>
    </NavigationContainer>
  );
}









const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
