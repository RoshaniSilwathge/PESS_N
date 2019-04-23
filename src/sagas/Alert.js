import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { push } from "react-router-redux";
import { delay } from "redux-saga";
import { reset } from "redux-form";
import { sendGETRequest, sendPOSTRequest, sendPUTRequest } from "../remote";
import {
  LOAD_ALERTS,
  SAVE_ALERT,
  UPDATE_ALERT,
} from "constants/ActionTypes";
import {
  alertsLoaded,
  saveAlertSuccess,
  updateAlertSuccess
} from "actions/Alerts";
import {
  showGlobalSuccessMsg,
  showGlobalErrorMsg
} from "../actions/Notifications";

const loadAlertsRequest = async () =>
  await sendGETRequest("/api/alerts/announcements")
    .then(alerts => alerts)
    .catch(error => error);

const saveAlertRequest = async alert =>
  await sendPOSTRequest("/api/alerts", alert)
    .then(alert => alert)
    .catch(error => error);

const updateAlertRequest = async ({ id, alert }) =>
  await sendPUTRequest(`/api/alerts/${id}`, alert)
    .then(alert => alert)
    .catch(error => error);

function* triggerLoadAlerts() {
  try {
    const loadAlertsResult = yield call(loadAlertsRequest);
    if (loadAlertsResult.status === 200) {
      yield put(alertsLoaded(loadAlertsResult.data));
    } else {
      yield put(showGlobalErrorMsg(loadAlertsResult.response.data.message));
    }
  } catch (error) {
    yield put(showGlobalErrorMsg(error));
  }
}

function* triggerSaveAlert(data) {
  try {
    const saveAlertResult = yield call(saveAlertRequest, data.payload);
    if (saveAlertResult.status === 201) {
      yield put(saveAlertSuccess(saveAlertResult.data));
      yield put(showGlobalSuccessMsg("Alert Successfully created."));
      yield delay(500);
      yield put(push("/app/project-coordinator/announcements"));
    } else {
      yield put(showGlobalErrorMsg(saveAlertResult.response.data.message));
    }
  } catch (error) {
    yield put(showGlobalErrorMsg(error));
  }
}

function* triggerUpdateAlert(data) {
  try {
    const updateAlertResult = yield call(updateAlertRequest, data.payload);
    if (updateAlertResult.status === 200) {
      yield put(updateAlertSuccess(updateAlertResult.data));
      yield put(showGlobalSuccessMsg("Alert Successfully updated."));
      yield delay(500);
      yield put(push("/app/project-coordinator/announcements"));
    } else {
      yield put(showGlobalErrorMsg(updateAlertResult.response.data.message));
    }
  } catch (error) {
    yield put(showGlobalErrorMsg(error));
  }
}

export function* initiateAlerts() {
  yield takeEvery(LOAD_ALERTS, triggerLoadAlerts);
}

export function* initiateSaveAlert() {
  yield takeEvery(SAVE_ALERT, triggerSaveAlert);
}

export function* initiateUpdateAlert() {
  yield takeEvery(UPDATE_ALERT, triggerUpdateAlert);
}

export default function* rootSaga() {
  yield all([
    fork(initiateAlerts),
    fork(initiateSaveAlert),
    fork(initiateUpdateAlert)
  ]);
}
