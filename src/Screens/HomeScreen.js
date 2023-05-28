import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';

import BlogListComponent from "../Components/BlogListComponent"; 

import { API_MAIL,API_PASSWORD } from '@env';
import { registerForPushNotificationsAsync } from "../Utlis/Util";
import { baserLogin,fetchAdminApiResponse } from "../Utlis/Baser";


const HomeScreen = (props) => {
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const token = await registerForPushNotificationsAsync();
        if (token) {
          // デバイストークンの取得が成功した場合の処理
          const data = await baserLogin({
            email: API_MAIL,
            password: API_PASSWORD,
          });
      
          await fetchAdminApiResponse("expo-push/expo_pushs.json","POST",{token:token},data.access_token)
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchToken();
  });
    return (
      <View>
        <BlogListComponent navigation={props.navigation} />
      </View>
    );
  };
  
  export default HomeScreen;