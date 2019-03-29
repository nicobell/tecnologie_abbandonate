import React, { Component } from 'react';
import Post from '../Post';
import PostForm from '../PostForm';

//Pagina di prova da tutorial per capire il funzionamento del back-end con Redux
//e la gestione della struttura ACTION-REDUCER-STORE comune a tutti i componenti
//per ottimizzazione
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
