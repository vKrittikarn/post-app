import React, { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Input from './components/Input';
import Post from './components/Post';
import Search from './components/Search';

let id = 1;

const App = () => {
  const [posts, setPosts] = useState([]);
  const [searchText, setSearchText] = useState('');

  const addSearchText = (searchText) => {
    setSearchText(searchText);
  };

  const addPost = (newPost) => {
    setPosts((prevPost) => {
      return [{ id, title: newPost }, ...prevPost];
    });
    id += 1;
  };

  const removePost = (id) => {
    const newPost = posts.filter((post) => post.id !== id);
    setPosts(newPost);
  };

  return (
    <div className="App">
      <Navbar />
      <Input addPost={addPost} />
      <Search addSearchText={addSearchText} />
      {posts
        .filter((post) => {
          return post.title.includes(searchText);
        })
        .map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            deletePost={removePost}
          />
        ))}
    </div>
  );
};

export default App;
