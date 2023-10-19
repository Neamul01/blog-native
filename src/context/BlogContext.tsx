import createDataContext from './createDataContext';

type BlogPost = {
  id: number;
  title: string;
};

const blogReducer = (state: BlogPost[], action: any) => {
  switch (action.type) {
    case 'delete_blogpost':
      return state.filter(blogpost => blogpost.id !== action.payload);

    case 'add_blogpost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];

    case 'edit_blogpost':
      return state.map(blogPost => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
  }
};

const addBlogPost = (dispatch: any) => {
  return (title: string, content: any, callback: any) => {
    dispatch({type: 'add_blogpost', payload: {title, content}});
    if (callback) {
      callback();
    }
  };
};

const deleteBlogPost = (dispatch: any) => {
  return (id: number) => {
    dispatch({type: 'delete_blogpost', payload: id});
  };
};

const editBlogPost = (dispatch: any) => {
  return (id: number, title: string, content: string, callback: any) => {
    dispatch({type: 'edit_blogpost', payload: {id, title, content}});
    if (callback) {
      callback();
    }
  };
};

export const {Context, Provider} = createDataContext(
  blogReducer,
  {addBlogPost, deleteBlogPost, editBlogPost},
  [{id: 1, title: 'TEST POST', content: 'TEST CONTENT'}],
);
