import {
    SHOW_GLOBAL_SUCCESS_MSG,
    HIDE_GLOBAL_SUCCESS_MSG,
    SHOW_GLOBAL_ERROR_MSG,
    HIDE_GLOBAL_ERROR_MSG
  } from "../constants/ActionTypes";
  
  const INIT_STATE = {
    showSuccess: false,
    successMsg: '',
    showError: false,
    errorMsg: ''
  };
  
  export default (state = INIT_STATE, action) => {
    switch (action.type) {
      case SHOW_GLOBAL_SUCCESS_MSG: {
        return {
          ...state,
          showSuccess: true,
          successMsg: action.payload
        };
      }
      case SHOW_GLOBAL_ERROR_MSG: {
        return {
          ...state,
          showError: true,
          errorMsg: action.payload
        };
      }
      case HIDE_GLOBAL_SUCCESS_MSG: {
        return {
          ...state,
          showSuccess: false,
          successMsg: ''
        };
      }
      case HIDE_GLOBAL_ERROR_MSG: {
        return {
          ...state,
          showError: false,
          errorMsg: ''
        };
      }
      default:
        return state;
    }
  };
  