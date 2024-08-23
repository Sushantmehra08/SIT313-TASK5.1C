import React, { useState } from 'react';
import PostTypeSelector from './PostTypeSelector';
import QuestionForm from './QuestionForm';
import ArticleForm from './ArticleForm';

const PostForm = () => {
  const [postType, setPostType] = useState('question');

  return (
    <div>
      <h2>New Post</h2>
      <PostTypeSelector postType={postType} setPostType={setPostType} />
      {postType === 'question' && <QuestionForm />}
      {postType === 'article' && <ArticleForm />}
    </div>
  );
};

export default PostForm;
