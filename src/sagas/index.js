import { all } from 'redux-saga/effects';
import { sidebar } from './sidebar';

export default function* rootSaga() {
  yield all([
    sidebar()
  ]);
}
