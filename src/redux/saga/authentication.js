import { put, call } from "redux-saga/effects";

// import { loginApi } from "../../Api/index";
import {
  loginSuccess,
  loginFailure,
} from "../actions/authentication";


export function* loginSaga(action) {
  // toast.dismiss();
  console.log("action = ", action)
  try {
    localStorage.setItem("token", "sdfsdfsdfds")

    yield put(loginSuccess("sdfsdfsdfds"));

  } catch (error) {
    yield put(loginFailure(error));
  }
}