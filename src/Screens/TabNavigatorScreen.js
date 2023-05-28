import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./HomeScreen";
import ContactScreen from "./ContactScreen";
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();


const TabNavigatorScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{
          headerTitle: '記事一覧',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }} />
       <Tab.Screen name="Contact" component={ContactScreen} options={{
          headerTitle: 'お問い合わせ',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="mail" color={color} size={size} />
          ),
        }} /> 
    </Tab.Navigator>
  );
};

export default TabNavigatorScreen;