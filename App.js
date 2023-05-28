import { StyleSheet, Text, View,StatusBar } from "react-native";
import React, { useState, useEffect, useRef } from "react";


// import { API_MAIL,API_PASSWORD } from '@env';
// import { registerForPushNotificationsAsync } from "./src/Utlis/Util";
// import { baserLogin,fetchAdminApiResponse } from "./src/Utlis/Baser";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./src/Screens/HomeScreen";
import BlogDetailScreen from "./src/Screens/BlogDetailScreen";
import ContactScreen from "./src/Screens/ContactScreen";



import TabNavigatorScreen from "./src/Screens/TabNavigatorScreen";

const Stack = createStackNavigator();

const isHermes = () => !!global.HermesInternal;
export default function App() {
  console.log("start");
  console.log(isHermes());
  console.log("end");
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Tab">
      <Stack.Screen name="Tab" component={TabNavigatorScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={HomeScreen} options={{headerTitle: "記事一覧"}} />
      <Stack.Screen name="BlogDetail" component={BlogDetailScreen} options={{headerTitle: "記事詳細"}} />
      <Stack.Screen name="Contact" component={ContactScreen} options={{headerTitle: "お問い合わせ"}} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
