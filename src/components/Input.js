import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  const [input, setInput] = useState('');
  const { addPost } = props;
  const onChange = (event) => {
    setInput(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const newPost = event.target[0].value;
    if (newPost) {
      addPost(newPost);
      setInput('');
    }
  };

  return (
    <div className="Input">
      <form onSubmit={onSubmit} a>
        <div className="Input__header">พิมพ์อะไรหน่อย</div>
        <input
          className="Input__field"
          name="post"
          type="text"
          onChange={onChange}
          value={input}
        />
        <button className="Input_button" type="submit">
          โพสต์
        </button>
      </form>
    </div>
  );
};

Input.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default Input;
