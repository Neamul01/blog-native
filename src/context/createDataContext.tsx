import React, {createContext, useReducer, ReactNode, FC, Dispatch} from 'react';

// Define generic types for the actions and the state
interface ActionMap {
  [key: string]: (dispatch: Dispatch<Action>) => (...args: any[]) => void;
}

interface Action {
  type: string;
  [key: string]: any;
}

interface ContextProps<StateType, ActionType> {
  state: StateType;
  dispatch: Dispatch<ActionType>;
}

// The Props interface defines the expected structure for the children props
interface Props {
  children: ReactNode;
}

// Create context with initial undefined value, which will be set in Provider
function createDataContext<StateType, ActionType extends Action>(
  reducer: (state: StateType, action: ActionType) => StateType,
  actions: ActionMap,
  initialState: StateType,
) {
  const Context = createContext<
    ContextProps<StateType, ActionType> | undefined
  >(undefined);

  const Provider: FC<Props> = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // Actions are processed to bind the dispatch function
    const boundActions: {[key: string]: (...args: any[]) => void} = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    // The value prop expects an object with state and all bound actions
    return (
      <Context.Provider value={{state, dispatch, ...boundActions}}>
        {children}
      </Context.Provider>
    );
  };

  return {Context, Provider};
}

export default createDataContext;
