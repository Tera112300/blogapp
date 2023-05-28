import React, { Component } from "react";
import { View, Text } from "react-native";

class BlogDetailComponent extends Component {
  render() {
    const { blog } = this.props.route.params;
    return (
      <View style={styles.Container}>
        <Text style={styles.title}>{blog.title}</Text>
        <Text style={styles.detail}>{blog.detail.replace(/<[^>]*>/g, '')}</Text>
      </View>
    );
  }
}

const styles = {
  Container: {
    padding:15
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  detail: {
    fontSize: 16,
    lineHeight: 24,
  },
};


export default BlogDetailComponent;
