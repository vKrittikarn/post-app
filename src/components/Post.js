import React from 'react';

const Post = (props) => {
  const { id, title, deletePost } = props;
  return (
    <div className="Post">
      <button
        className="Post__delete"
        onClick={() => {
          deletePost(id);
        }}
      >
        X
      </button>
      <div className="Post__title">{title}</div>
      <img
        alt={`image_${id}`}
        className="Post__image"
        src={`https://source.unsplash.com/random?sig=${id}`}
      />
    </div>
  );
};

export default Post;
