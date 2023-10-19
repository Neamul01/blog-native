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
  }
};

const addBlogPost = (dispatch: any) => {
  return (title: string, content: any, callback: any) => {
    dispatch({type: 'add_blogpost', payload: {title, content}});
    callback();
  };
};

const deleteBlogPost = (dispatch: any) => {
  return (id: number) => {
    dispatch({type: 'delete_blogpost', payload: id});
  };
};

export const {Context, Provider} = createDataContext(
  blogReducer,
  {addBlogPost, deleteBlogPost},
  [],
);
