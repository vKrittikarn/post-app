import React, {useState} from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Input from './components/Input';
import Post from './components/Post';

let id = 1;

const App = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts([{id, title: newPost}, ...posts]);
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
      {posts.map((post) => (
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
