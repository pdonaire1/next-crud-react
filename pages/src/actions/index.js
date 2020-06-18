export const getList = () => ({
  type: 'GET_LIST',
});

export const sendPost = (data) => ({
  type: 'SEND_POST',
  data
});

export const deletePost = (id) => ({
  type: 'DELETE_POST',
  id
});

export const editPost = (data) => ({
  type: 'EDIT_POST',
  data
});

export const requestEditPost = (data) => ({
  type: 'EDIT_POST_REQUEST',
  data
});
