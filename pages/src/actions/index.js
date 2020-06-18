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
