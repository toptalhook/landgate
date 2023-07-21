// header.reducer.ts

// Define the initial state
export const initialState = {
    activePage: 'home', // Initialize with the default active page
  };
  
  // Define the action types
  export const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE';
  
  // Create the reducer function
  export function headerReducer(state = initialState, action) {
    switch (action.type) {
      case SET_ACTIVE_PAGE:
        return {
          ...state,
          activePage: action.payload,
        };
      default:
        return state;
    }
  }