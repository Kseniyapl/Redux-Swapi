import { FETCH, SUCCESS, FAILURE } from "../actions";
const initialState = {
  characters: [],
  fatching: true,
  error: ""
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH:
      return {
        ...state, 
        fatching: true,
        characters: [],
        error: ""
      };
    case SUCCESS:
      return {
        ...state, 
        fatching: false,
        characters: action.payload,
        error: ""
      }
    case FAILURE:
    return {
      ...state, 
      fatching: false,
      characters: [],
      error: action.payload
    }

    default:
      return state;
  }
};
