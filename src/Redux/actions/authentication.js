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
  }