import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountScreen from './AccountScreen';
import TrackCreateScreen from './TrackCreateScreen';
import TrackListScreen from './TrackListScreen'; 
const Tab = createBottomTabNavigator();

const Other = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
         name="TrackList" 
        component={TrackListScreen} 
        options={{headerShown:false}}
        />
      <Tab.Screen 
           name="TrackCreate" 
           component={TrackCreateScreen} 
           options={{headerShown:false}}
           />
      <Tab.Screen 
          name="Account" 
          component={AccountScreen} 
          options={{headerShown:false}}
          />
    </Tab.Navigator>
  );
}
export default Other;