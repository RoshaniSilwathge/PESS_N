import {
  ALERTS_SEARCH_KEY_CHNAGED,
  LOAD_ALERTS,
  ALERTS_LOADED,
  SAVE_ALERT,
  SAVE_ALERT_SUCCESS,
  UPDATE_ALERT,
  UPDATE_ALERT_SUCCESS,
  ALERTS_PROJECT_SEARCH_KEY_CHNAGED,
  ALERT_SELECTED
} from "constants/ActionTypes";

export const searchKeyChanged = searchKey => {
  return {
    type: ALERTS_SEARCH_KEY_CHNAGED,
    payload: searchKey
  };
};

export const projectSearchKeyChanged = searchKey => {
  return {
    type: ALERTS_PROJECT_SEARCH_KEY_CHNAGED,
    payload: searchKey
  };
};

export const alertSelected = studentId => {
  return {
    type: ALERT_SELECTED,
    payload: studentId
  };
};

export const loadAlerts = () => {
  return {
    type: LOAD_ALERTS
  };
};

export const alertsLoaded = students => {
  return {
    type: ALERTS_LOADED,
    payload: students
  };
};

export const saveAlert = alert => {
  return {
    type: SAVE_ALERT,
    payload: alert
  };
};

export const saveAlertSuccess = alert => {
  return {
    type: SAVE_ALERT_SUCCESS,
    payload: alert
  };
};

export const updateAlert = (id, alert) => {
  return {
    type: UPDATE_ALERT,
    payload: { id, alert }
  };
};

export const updateAlertSuccess = alert => {
  return {
    type: UPDATE_ALERT_SUCCESS,
    payload: alert
  };
};
