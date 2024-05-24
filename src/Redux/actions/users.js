import { GET_USERS_LIST } from "../types/user";
import axios from "axios";

export const getUsers = (users) => {
  return {
    type: GET_USERS_LIST,
    userslist: users
  }
};

export const getUserslist = async (dispacht) => {
  try {
    const resUserlist = await axios.get (
      'http://localhost:3000/api/users'
    );
    // console.log('list ==>', resUserlist)
    const userlistData = resUserlist.data;
    dispacht(getUsers(userlistData))
  } catch (error){
    console.log('===>>', error)
  }
}