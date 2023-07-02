import { createContext, useReducer, Dispatch } from 'react';
import { Project, mockProjects } from '../data';
import React from 'react';

interface State {
  projects: Project[];
  cart: Project[];
}

const initialState: State = {
  projects: mockProjects,
  cart: [],
};

type Action =
  | { type: 'ADD_TO_CART'; project: Project }
  | { type: 'REMOVE_FROM_CART'; projectId: number }

export const StoreContext = createContext<{
  state: State;
  dispatch: Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.project] };
    case 'REMOVE_FROM_CART':
      const updatedCart = state.cart.filter(
        (item) => item.id !== action.projectId
      );
      return { ...state, cart: updatedCart };
    default:
      return state;
  }
};

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
