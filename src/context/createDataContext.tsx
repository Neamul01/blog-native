import React, {useReducer} from 'react';

export default (reducer: any, actions: any, initialState: any) => {
  const Context = React.createContext<any>(null);

  const Provider = ({children}: {children: React.ReactNode}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // actions === { addBlogPost: (dispatch)=>{return ()=>{} } }
    const boundActions = {} as any;
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{state, ...boundActions}}>
        {children}
      </Context.Provider>
    );
  };

  return {Context, Provider};
};
