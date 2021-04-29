import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  const [input, setInput] = useState('');
  const {addPost} = props;
  const onChange = (event) => {
    setInput(event.target.value);
  };

  const onKeyDown = (event) => {
    const newPost = event.target.value;
    if (event.key === 'Enter' && newPost) {
      addPost(newPost);
      setInput('');
    }
  };

  return (
    <div className="Input">
      <div className="Input__header">พิมพ์อะไรหน่อย</div>
      <input
        className="Input__field"
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={input}
      />
    </div>
  );
};

Input.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default Input;
