import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import Home from './Home';
import Belanja from './Belanja';
import Notifikasi from './Notifikasi';
import Favorite from './Favorite';

const Tab = createBottomTabNavigator();

export default function Layout() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Belanja') {
              iconName = focused ? 'cart' : 'cart-outline';
            } else if (route.name === 'Notifikasi') {
              iconName = focused ? 'notifications' : 'notifications-outline';
            } else if (route.name === 'Favorite') {
              iconName = focused ? 'heart' : 'heart-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#FF69B4',  // Bright pink for active tab
          tabBarInactiveTintColor: '#FFC0CB',  // Light pink for inactive tab
          tabBarStyle: {
            backgroundColor: '#ffe4e1',  // Light pink background for the tab bar
          },
          headerStyle: {
            backgroundColor: '#ffb6c1',  // Light pink header
          },
          headerTintColor: '#fff',  // White text in the header
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Belanja" component={Belanja} />
        <Tab.Screen name="Notifikasi" component={Notifikasi} />
        <Tab.Screen name="Favorite" component={Favorite} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
