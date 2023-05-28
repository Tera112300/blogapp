import React from 'react';
import { WebView } from 'react-native-webview';
import { BASE_URL} from "@env";

const ContactScreen = () => {
  const injectedJavaScript = `
  document.body.classList.add('webview-body');
  `;
  return (
    <WebView source={{ uri: BASE_URL + 'contact/' }} originWhitelist={[BASE_URL]} injectedJavaScript={injectedJavaScript}
    cacheEnabled={false} incognito={true}
    />
  );
};
  
export default ContactScreen;