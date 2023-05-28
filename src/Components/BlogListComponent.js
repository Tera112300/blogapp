import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { fetchApiResponse } from "../Utlis/Baser";


import { List,Button } from 'react-native-paper';

class BlogListComponent extends Component {
  state = {
    blogs: [],
    currentPage: 1,
  };

  componentDidMount() {
    this.fetchBlogList();
  }

  fetchBlogList = async () => {
    try {
      const blogs = await fetchApiResponse("bc-blog/blog_posts.json");
      console.log(blogs.blogPosts);
      this.setState({ blogs:blogs.blogPosts });
    } catch (error) {
      console.error("Error fetching blog list:", error);
    }
  };

  renderBlogItem = ({ item }) => (
    <View style={{ borderBottomWidth: 1, borderColor: 'gray' }}>
    <List.Item
      title={item.title}
      description={item.content.replace(/<[^>]*>/g, '')}
      onPress={() => this.handleBlogPress(item)}
    />
    </View>
  );

  
  
  handleBlogPress = (blog) => {
    console.log(this.props);
    // 記事が押されたときの処理を記述
    this.props.navigation.navigate('BlogDetail', { blog });
    //console.log('Blog Pressed:', blog);
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const { blogs,currentPage } = this.state;
    const itemsPerPage = 10; // 1ページあたりのアイテム数
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pagedBlogs = blogs.slice(startIndex, endIndex);
    return (
      <View>
        <FlatList
          data={pagedBlogs}
          keyExtractor={(blog) => blog.id.toString()}
          renderItem={this.renderBlogItem}
        />

          <View style={styles.pagerContainer}>
          <Button
            mode="contained"
            onPress={() => this.handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            style={styles.pagerButton}
            labelStyle={styles.pagerButtonText}
          >
            前へ
          </Button>
          <Text style={{ marginHorizontal: 10 }}>{currentPage}</Text>
          <Button
            mode="contained"
            onPress={() => this.handlePageChange(currentPage + 1)}
            disabled={endIndex >= blogs.length}
            style={styles.pagerButton}
            labelStyle={styles.pagerButtonText}
          >
            次へ
          </Button>
        </View>
      </View>
    );
  }
}


const styles = {
  pagerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  pagerButton: {
    marginHorizontal: 5,
    width: 100,
  },
  pagerButtonText: {
    fontSize: 16,
  },
  currentPageText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
};

export default BlogListComponent;
