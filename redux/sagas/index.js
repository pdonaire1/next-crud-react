import { put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';
import * as constants from '../constants';

const url = "https://jsonplaceholder.typicode.com";

function* getPosts() {
  console.log("loading")
  const json = yield axios(`${url}/posts`);
  yield put({ type: constants.GET_LIST_SUCCESS, data: json.data, });
}

function* createPost(payload) {
  const { title, body } = payload.data;
  try {
    const json = yield axios.post(`${url}/posts`, {
      title: title,
      body: body
    })
    yield put({ type: constants.SEND_POST_SUCCESS, data: {...json.data, title, body }});
  } catch (error) {
    console.log("Err:", error)
  }
}


function* editPost(payload) {
  const { id, title, body } = payload.data;
  try {
    yield axios.put(`${url}/posts/${id}`, { title, body });
  } catch (error) {
    console.log("Err:", error)
  }
  yield put({ type: constants.EDIT_POST_SUCCESS });
}

function* deletePost(payload) {
  const { id } = payload;
  try {
    yield axios.delete(`${url}/posts/${id}`);
  } catch (error) {
    console.log("Err:", error)
  }
  yield put({ type: constants.DELETE_POST_SUCCESS, id: payload.id});
}

function* actionWatcher() {
  yield takeLatest(constants.GET_LIST, getPosts),
  yield takeLatest(constants.SEND_POST, createPost),
  yield takeLatest(constants.DELETE_POST, deletePost),
  yield takeLatest(constants.EDIT_POST_REQUEST, editPost)
}
export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}