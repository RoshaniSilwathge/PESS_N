import {
    HIDE_MESSAGE,
    INIT_URL,
    ON_HIDE_LOADER,
    ON_SHOW_LOADER,
    SHOW_MESSAGE,
    SIGNIN_USER,
    SIGNIN_USER_SUCCESS,
    SIGNOUT_USER,
    SIGNOUT_USER_SUCCESS,
    CHANGE_PASSWORD
} from 'constants/ActionTypes';

export const userSignIn = (user) => {
    return {
        type: SIGNIN_USER,
        payload: user
    };
};
export const userSignOut = () => {
    return {
        type: SIGNOUT_USER
    };
};

export const changePassword = (payload) => {
    return {
        type: CHANGE_PASSWORD,
        payload
    };
};

export const userSignInSuccess = (accessToken) => {
    return {
        type: SIGNIN_USER_SUCCESS,
        payload: accessToken
    }
};
export const userSignOutSuccess = () => {
    return {
        type: SIGNOUT_USER_SUCCESS,
    }
};

export const showAuthMessage = (message) => {
    return {
        type: SHOW_MESSAGE,
        payload: message
    };
};

export const setInitUrl = (url) => {
    return {
        type: INIT_URL,
        payload: url
    };
};

export const showAuthLoader = () => {
    return {
        type: ON_SHOW_LOADER,
    };
};

export const hideMessage = () => {
    return {
        type: HIDE_MESSAGE,
    };
};
export const hideAuthLoader = () => {
    return {
        type: ON_HIDE_LOADER,
    };
};
