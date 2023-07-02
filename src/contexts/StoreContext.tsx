import { createContext, useReducer, Dispatch } from 'react';
import { Project, mockProjects } from '../data';
import React from 'react';

interface State {
  projects: Project[];
  cart: Project[];
  maxPrice: number | null;
  minPrice: number | null;
  sort: string | null;
  stack: string | null;
  searchTerm: string;
}

const initialState: State = {
  projects: mockProjects,
  cart: [],
  maxPrice: null,
  minPrice: null,
  sort: null,
  stack: null,
  searchTerm: '',
};

type Action =
  | { type: 'ADD_TO_CART'; project: Project }
  | { type: 'REMOVE_FROM_CART'; projectId: number }
  | { type: 'SET_MAX_PRICE'; payload: number }
  | { type: 'SET_MIN_PRICE'; payload: number }
  | { type: 'SET_SORT'; payload: string }
  | { type: 'SET_STACK'; payload: string }
  | { type: 'SET_SEARCH_TERM'; payload: string };

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
    case 'SET_MAX_PRICE':
      return { ...state, maxPrice: action.payload };
    case 'SET_MIN_PRICE':
      return { ...state, minPrice: action.payload };
    case 'SET_SORT':
      return { ...state, sort: action.payload };
    case 'SET_STACK':
      return { ...state, stack: action.payload };
    case 'SET_SEARCH_TERM':
      return { ...state, searchTerm: action.payload };
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
