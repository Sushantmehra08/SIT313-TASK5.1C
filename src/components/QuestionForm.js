import React from 'react';

const QuestionForm = () => {
  return (
    <div>
      <div>
        <label>Title</label>
        <input type="text" placeholder="Start your question with how, what, why, etc." />
      </div>
      <div>
        <label>Describe your problem</label>
        <textarea placeholder="Describe your problem"></textarea>
      </div>
      <div>
        <label>Tags</label>
        <input type="text" placeholder="Please add up to 3 tags to describe what your question is about e.g., Java" />
      </div>
      <button type="submit">Post</button>
    </div>
  );
};

export default QuestionForm;
