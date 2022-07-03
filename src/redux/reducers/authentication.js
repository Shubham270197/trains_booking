import { authenticationAction } from "../actionTypes";

const initialState = {
  loginSuccess: false,
  loginLoader: false,
  loginData: '',
  logoutSuccess: false,
  drawerState: false
}

export default function authenticationModule(
  state = initialState,
  { payload, type, key }
) {
  switch (type) {
    case authenticationAction.USER_LOGIN_INITIATE:
      return {
        ...state,
        loginLoader: true,
        loginSuccess: false,
        logoutSuccess: false
      };

    case authenticationAction.USER_LOGIN_SUCCESS:
      return {
        ...state,
        loginLoader: false,
        loginData: payload,
        loginSuccess: true,
      };

    case authenticationAction.USER_LOGIN_FAILURE:
      return {
        ...state,
        loginLoader: false,
      };

    case authenticationAction.USER_LOGOUT:
      return {
        ...state,
        logoutSuccess: true,
        loginSuccess: false
      };

    case authenticationAction.DRAWER_EVENT:
          state[key] = payload
          return { ...state, }


    default:
      return state;
  }
}
