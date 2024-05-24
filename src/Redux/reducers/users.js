import { GET_USERS_LIST } from "../types/user";
 
const initialState = {
  users: []
};

export default (state= initialState, action) => {
  switch(action.type) {
    case GET_USERS_LIST:
      return {
        ...state,
        users: action.userslist
      };
    default:
      return state; 
  }
}