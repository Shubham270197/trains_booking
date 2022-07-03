import { createSelector } from 'reselect'

export const getMemoizedAuthenticationData = createSelector(
    (state) => state.authentication,
    (authenticationState) => {
        const {
            loginData,
            loginSuccess,
            loginLoader,
            logoutSuccess,
            drawerState
        } = authenticationState

        return {
            loginData,
            loginSuccess,
            loginLoader,
            logoutSuccess,
            drawerState
        }
    }
)