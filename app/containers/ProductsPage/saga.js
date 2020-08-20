import { take, call, put, fork, takeLatest, delay } from 'redux-saga/effects';
import request from 'utils/request';
import * as TYPE from './actionTypes';

function* getProductsFlow() {
  const requestURL = `https://api.github.com/users/a/repos?type=all&sort=updated`;
  try {
    const products = yield call(request, requestURL);
    yield put({
      type: TYPE.GET_PRODUCTS_SUCCESSFUL,
      data: products
    });
  } catch (error) {
    console.log('function*getProductsFlow -> error', error);
  }
}

export default function* productsSaga() {
  yield takeLatest(TYPE.GET_PRODUCTS_REQUESTING, getProductsFlow);
}
