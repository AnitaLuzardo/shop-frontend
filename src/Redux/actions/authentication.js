import axios from "axios";
import { GET_SESSION_SUCCESS, GET_SESSION_ERROR } from "../types/session";

export const getUserSuccess = (user) => {
  return {
    type: GET_SESSION_SUCCESS,
    session: user
  }
};

export const getUserError = (error) => {
  return {
    type: GET_SESSION_ERROR,
    errors: error
  }
};

export const startLogin = async (form, dispatch) => {
  try {
    const response = await axios.post(
      'http://localhost:3000/api/auth/login',
      form
    );
    const user = response.data;
    dispatch(getUserSuccess(user));
    
    localStorage.setItem("user", JSON.stringify(user));

  } catch (error) {
    const errors = error.response.data.message;
    dispatch(getUserError(errors));
  }
}
