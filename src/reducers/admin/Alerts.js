import {
  ALERTS_SEARCH_KEY_CHNAGED,
  ALERTS_LOADED,
  SAVE_ALERT_SUCCESS,
  UPDATE_STUDENT_SUCCESS,
  ALERTS_PROJECT_SEARCH_KEY_CHNAGED,
  ALERT_SELECTED
} from "../../constants/ActionTypes";

const INIT_STATE = {
  searchKey: "",
  alerts: [],
  selectedAlert: null,
  searchKeyProject: "default"
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case ALERTS_SEARCH_KEY_CHNAGED: {
      return {
        ...state,
        searchKey: action.payload
      };
    }
    case ALERT_SELECTED: {
      return {
        ...state,
        selectedAlert: state.alerts.find(alert => alert.id == action.payload)
      };
    }
    case ALERTS_PROJECT_SEARCH_KEY_CHNAGED: {
      return {
        ...state,
        searchKeyProject: action.payload
      };
    }
    case ALERTS_LOADED: {
      return {
        ...state,
        alerts: action.payload
      };
    }
    case SAVE_ALERT_SUCCESS: {
      return {
        ...state,
        alerts: [action.payload, ...state.alerts]
      };
    }
    case UPDATE_STUDENT_SUCCESS: {
      const filteredAlerts = state.alerts.filter(
        alert => alert.id !== action.payload.id
      );
      return {
        ...state,
        alerts: [action.payload, ...filteredAlerts],
        selectedAlert: action.payload
      };
    }
    default:
      return state;
  }
};
