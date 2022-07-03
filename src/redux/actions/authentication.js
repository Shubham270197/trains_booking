import { authenticationAction } from "../actionTypes";

export const loginInitiate = (data, navigate) => ({
    type: authenticationAction.USER_LOGIN_INITIATE,
    payload: data,
    navigate,
});

export const loginSuccess = (data) => ({
    type: authenticationAction.USER_LOGIN_SUCCESS,
    payload: data,
});

export const loginFailure = (error) => ({
    type: authenticationAction.USER_LOGIN_FAILURE,
    payload: error,
});

export const logoutInitiate = (data, navigate) => ({
    type: authenticationAction.USER_LOGOUT,
    payload: data,
    navigate,
});


export const drawerAction = (data, key) => {
    const action = {
        type: authenticationAction.DRAWER_EVENT,
        payload: data,
        key
    }
    return action;
}
