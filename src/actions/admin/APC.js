import {ADMIN_APC_SEARCH_KEY_CHNAGED} from '../../constants/ActionTypes';

export const searchKeyChanged = (searchKey) => {
    return {
        type: ADMIN_APC_SEARCH_KEY_CHNAGED,
        payload: searchKey
    };
};