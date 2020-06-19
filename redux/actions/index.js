//Action Types
import * as constants from '../constants';

export const getList = () => ({
  type: constants.GET_LIST,
});

export const sendPost = (data) => ({
  type: constants.SEND_POST,
  data
});

export const deletePost = (id) => ({
  type: constants.DELETE_POST,
  id
});

export const editPost = (data) => ({
  type: constants.EDIT_POST,
  data
});

export const requestEditPost = (data) => ({
  type: constants.EDIT_POST_REQUEST,
  data
});
