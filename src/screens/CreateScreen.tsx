import React, {useContext} from 'react';
import {Context} from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({navigation}: {navigation: any}) => {
  const {addBlogPost} = useContext(Context);

  return (
    <BlogPostForm
      onSubmit={(title: string, content: string) => {
        addBlogPost(title, content, () => navigation.navigate('Home'));
      }}
    />
  );
};

export default CreateScreen;
