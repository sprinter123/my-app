import {CREATE_USER, FETCH_USERS, CHECK_FAVORITE, POST_USERS} from "./constance";
import { DELETE_USER } from "./constance";

export const createUser = (user) => {
  return {
    type: CREATE_USER,
    payload: user,
  };
};

export const deleteUser = (id) => {
  return {
    type: DELETE_USER,
    payload: id,
  };
};

export const fetchUsers = (data) => {
  return {
    type:FETCH_USERS,
    payload: data
  }
}

export const checkFavorite = (id) => {
  return {
    type:   CHECK_FAVORITE,
    payload: id,
  };
};

export const postUsers = (user) => {
  return {
    type:POST_USERS,
    payload: user
  }
}

