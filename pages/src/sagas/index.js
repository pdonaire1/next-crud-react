import { put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';

function* fetchNews() {
  const json = yield axios('https://jsonplaceholder.typicode.com/todos');    
  yield put({ type: "GET_LIST_SUCCESS", data: json.data, });
}


function* actionWatcher() {
     yield takeLatest('GET_LIST', fetchNews)
}
export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}