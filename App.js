import React from 'react';
import Other from './src/screens/Other'
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackDetailScreen  from './src/screens/TrackDetailScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Provider as LocationProvider} from './src/context/LoactionContext'
import { Provider as AuthProvider} from './src/context/AuthContext';
import {Provider as TrackProvider} from './src/context/TrackContext'
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
const Stack = createStackNavigator();


const App =() => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
           name="SignupScreen" 
           component={SignupScreen} 
           //options={{headerShown:false}} //header is not dispaly
           />
        <Stack.Screen 
            name="SigninScreen" 
            component={SigninScreen} 
            options={{headerShown:false}}
          />
        <Stack.Screen 
            name="AccountScreen"
            component={Other} 
            options={{headerShown:false}}/>
        <Stack.Screen 
            name="TrackDetail" 
            component={TrackDetailScreen} 
            options={{title:' '}}/>
      </Stack.Navigator>
      <Stack.Screen 
           name="ResolveAuth" 
           component={ResolveAuthScreen} 
           //options={{headerShown:false}} //header is not dispaly
           />
    </NavigationContainer>
  );
}


export default () => {
  return (
    <TrackProvider>
        <LocationProvider>
            <AuthProvider>
                <App />
            </AuthProvider>
        </LocationProvider>
    </TrackProvider>
  );
};
