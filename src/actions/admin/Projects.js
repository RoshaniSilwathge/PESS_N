import {ADMIN_PROJECT_SEARCH_KEY_CHNAGED, ADMIN_PROJECT_SELECTED} from '../../constants/ActionTypes';

export const searchKeyChanged = (searchKey) => {
    return {
        type: ADMIN_PROJECT_SEARCH_KEY_CHNAGED,
        payload: searchKey
    };
};

export const projectSelected = (projectId) => {
    return {
        type: ADMIN_PROJECT_SELECTED,
        payload: projectId
    };
};