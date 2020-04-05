import { call, put, takeLatest, all } from 'redux-saga/effects';
import apiClient from '../../apiClient';
import * as types from '../actions/sidebar';

let client;

export function* fetchSidebarData() {
  try {
    const response = yield call(async () => client.get('https://mayank8aug.github.io/ReactNative-Boilerplate-Redux-Saga/assets/json/sidebar.json'));
    yield put({
      type: types.SIDEBAR_DATA_SUCCESS,
      data: response.data
    });
  } catch (error) {
    console.log('Request failed! Could not fetch sidebar data.');
    yield put({
      type: types.SIDEBAR_DATA_FAIL,
      data: error
    });
  }
}

export function* sidebar() {
  client = Object.assign({}, apiClient);
  yield all([
    takeLatest(types.SIDEBAR_DATA_LOAD, fetchSidebarData) 
  ])
}
