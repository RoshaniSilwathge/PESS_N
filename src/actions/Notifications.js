import {
    SHOW_GLOBAL_SUCCESS_MSG,
    HIDE_GLOBAL_SUCCESS_MSG,
    SHOW_GLOBAL_ERROR_MSG,
    HIDE_GLOBAL_ERROR_MSG
} from 'constants/ActionTypes';

export const showGlobalSuccessMsg = (msg) => {
    return {
        type: SHOW_GLOBAL_SUCCESS_MSG,
        payload: msg
    };
};
export const hidelobalSuccessMsg = () => {
    return {
        type: HIDE_GLOBAL_SUCCESS_MSG
    };
};

export const showGlobalErrorMsg = (msg) => {
    return {
        type: SHOW_GLOBAL_ERROR_MSG,
        payload: msg
    };
};
export const hidelobalErrorMsg = () => {
    return {
        type: HIDE_GLOBAL_ERROR_MSG
    };
};