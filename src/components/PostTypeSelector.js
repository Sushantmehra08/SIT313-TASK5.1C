import React from 'react';

const PostTypeSelector = ({ postType, setPostType }) => {
  return (
    <div>
      <label>Select Post Type: </label>
      <input
        type="radio"
        value="question"
        checked={postType === 'question'}
        onChange={() => setPostType('question')}
      /> Question
      <input
        type="radio"
        value="article"
        checked={postType === 'article'}
        onChange={() => setPostType('article')}
      /> Article
    </div>
  );
};

export default PostTypeSelector;
