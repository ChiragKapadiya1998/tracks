import React from 'react';
import Other from './src/screens/Other'
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen  from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator(); 

const App =() => {
  return (
    <NavigationContainer>
      

      <Stack.Navigator>
      <Stack.Screen name="other" component={Other} />
        <Stack.Screen name="AccountScreen" component={AccountScreen} />
        <Stack.Screen name="SigninScreen" component={SigninScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;