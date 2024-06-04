import { GET_SESSION_SUCCESS, GET_SESSION_ERROR } from "../types/session";

const initialState = {
  user: null,
  errors: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_SESSION_SUCCESS:
      return {
        ...state,
        user: action.session
      };
    case GET_SESSION_ERROR:
      return {
        ...state,
        errors: action.errors
      };
    default:
      return state;  
  }
}