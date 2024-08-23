import React from 'react';

const ArticleForm = () => {
  return (
    <div>
      <div>
        <label>Title</label>
        <input type="text" placeholder="Enter a descriptive title" />
      </div>
      <div>
        <label>Abstract</label>
        <textarea placeholder="Enter a 1-paragraph abstract"></textarea>
      </div>
      <div>
        <label>Article Text</label>
        <textarea placeholder="Enter the main content of your article"></textarea>
      </div>
      <div>
        <label>Tags</label>
        <input type="text" placeholder="Please add up to 3 tags to describe what your article is about e.g., Java" />
      </div>
      <button type="submit">Post</button>
    </div>
  );
};

export default ArticleForm;
