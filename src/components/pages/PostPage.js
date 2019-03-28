import React, { Component } from 'react';
import Post from '../Post';
import PostForm from '../PostForm';

class PostPage extends React.Component {
  render() {
    return (
      <div>
        <PostForm />
        <hr />
        <Post />
      </div>
    );
  }
}

export default PostPage;
