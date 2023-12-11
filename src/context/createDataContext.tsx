import React, {createContext, useReducer, ReactNode, FC, Dispatch} from 'react';

// Define a generic Action type
interface Action {
  type: string;
  [key: string]: any;
}

// Define a type for the actions object where each key is a function that returns an action creator function
type ActionsMap<ActionType> = {
  [key: string]: (dispatch: Dispatch<ActionType>) => (...args: any[]) => void;
};

// Props interface for the Provider component
interface Props {
  children: ReactNode;
}

// createDataContext now takes a generic ActionType
function createDataContext<StateType, ActionType extends Action>(
  reducer: (state: StateType, action: ActionType) => StateType,
  actions: ActionsMap<ActionType>,
  initialState: StateType,
) {
  const Context = createContext<
    | {
        state: StateType;
        dispatch: Dispatch<ActionType>;
      }
    | undefined
  >(undefined);

  const Provider: FC<Props> = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // Bind actions to the dispatch function
    const boundActions: {[key: string]: (...args: any[]) => void} = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{state, dispatch, ...boundActions}}>
        {children}
      </Context.Provider>
    );
  };

  return {Context, Provider};
}

export default createDataContext;
