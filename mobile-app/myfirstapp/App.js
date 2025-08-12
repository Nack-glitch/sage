import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ServicesScreen from './screens/ServicesScreen';
import ContactScreen from './screens/ContactScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: '#6A0DAD',
          tabBarInactiveTintColor: '#aaa',
          headerStyle: { backgroundColor: '#4b077bff' },
          headerTintColor: '#fff',
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';
            else if (route.name === 'About') iconName = focused ? 'information-circle' : 'information-circle-outline';
            else if (route.name === 'Services') iconName = focused ? 'list' : 'list-outline';
            else if (route.name === 'Contact') iconName = focused ? 'call' : 'call-outline';

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
        <Tab.Screen name="Services" component={ServicesScreen} />
        <Tab.Screen name="Contact" component={ContactScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
