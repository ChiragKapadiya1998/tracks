import React from 'react';
import Other from './src/screens/Other'
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackDetailScreen  from './src/screens/TrackDetailScreen';
import { Provider as AuthProvider} from './src/context/AuthContext'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { setNavigator } from './src/navigationRef';

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
    </NavigationContainer>
  );
}


export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
