import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountScreen from './AccountScreen';
import TrackCreateScreen from './TrackCreateScreen';
import TrackDetailScreen  from './TrackDetailScreen';
import TrackListScreen from './TrackListScreen'; 
const Tab = createBottomTabNavigator();

const Other = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TrackCreateScreen" component={TrackCreateScreen} />
      <Tab.Screen name="TrackDetailScreen" component={TrackDetailScreen} />
      <Tab.Screen name="TrackListScreen" component={TrackListScreen} />
    </Tab.Navigator>
  );
}
export default Other;