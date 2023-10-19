import React, {useContext} from 'react';
import {Context} from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({navigation, route}: {navigation: any; route: any}) => {
  const {id} = route.params;
  const {state, editBlogPost} = useContext(Context);
  const blogPost = state.find((post: any) => post.id === id);

  console.log(route.params);

  return (
    <BlogPostForm
      initialValues={{title: blogPost.title, content: blogPost.content}}
      onSubmit={(title: string, content: string) => {
        editBlogPost(id, title, content, () => navigation.goBack());
      }}
    />
  );
};

export default EditScreen;
