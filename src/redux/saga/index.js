import { takeEvery, takeLatest } from "redux-saga/effects";

import {
  authenticationAction,
} from "../actionTypes";

import {
  loginSaga,
} from "./authentication";



export default function* watcherSaga() {
  yield takeLatest(authenticationAction.USER_LOGIN_INITIATE, loginSaga);

}