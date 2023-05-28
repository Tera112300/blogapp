import React from 'react';
import { View, Text, Button } from 'react-native';
import BlogDetailComponent from "../Components/BlogDetailComponent"; 

const BlogDetailScreen = (props) => {

  return (
    <View>
      <BlogDetailComponent {...props} />
    </View>
  );
};
  
export default BlogDetailScreen;