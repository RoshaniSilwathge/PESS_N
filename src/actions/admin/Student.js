import {ADMIN_STUDENT_SEARCH_KEY_CHNAGED} from '../../constants/ActionTypes';

export const searchKeyChanged = (searchKey) => {
    return {
        type: ADMIN_STUDENT_SEARCH_KEY_CHNAGED,
        payload: searchKey
    };
};