import { put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';
const url = "https://jsonplaceholder.typicode.com";

function* getPosts() {
  const json = yield axios(`${url}/posts`);
  yield put({ type: "GET_LIST_SUCCESS", data: json.data, });
}

function* createPost(payload) {
  const { title, body } = payload;
  try {
    const json = yield axios.post(`${url}/posts`, {
      title: title,
      body: body
    })
    yield put({ type: "SEND_POST_SUCCESS", data: json.data });
  } catch (error) {
    console.log("Err:", error)
  }
}

function* actionWatcher() {
  yield takeLatest('GET_LIST', getPosts),
  yield takeLatest('SEND_POST', createPost)
}
export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}