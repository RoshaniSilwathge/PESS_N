import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { push } from 'react-router-redux';
import { delay } from 'redux-saga';
import {reset} from 'redux-form';
import { sendGETRequest, sendPOSTRequest, sendPUTRequest } from "../remote";
import {
  ADMIN_LOAD_STUDENTS,
  ADMIN_SAVE_STUDENT,
  ADMIN_UPDATE_STUDENT
} from "constants/ActionTypes";
import {
  studentsLoaded,
  saveStudentSuccess,
  updateStudentSuccess
} from "actions/admin/Student";
import {
  showGlobalSuccessMsg,
  showGlobalErrorMsg
} from "../actions/Notifications";

const loadStudentsRequest = async () =>
  await sendGETRequest("/api/students")
    .then(students => students)
    .catch(error => error);

const saveStudentRequest = async student =>
  await sendPOSTRequest("/api/students", student)
    .then(student => student)
    .catch(error => error);

const updateStudentRequest = async ({ id, student }) =>
  await sendPUTRequest(`/api/students/${id}`, student)
    .then(student => student)
    .catch(error => error);

function* triggerLoadStudents() {
  try {
    const loadStudentsResult = yield call(loadStudentsRequest);
    if (loadStudentsResult.status === 200) {
      yield put(studentsLoaded(loadStudentsResult.data));
    } else {
      yield put(showGlobalErrorMsg(loadStudentsResult.response.data.message));
    }
  } catch (error) {
    yield put(showGlobalErrorMsg(error));
  }
}

function* triggerSaveStudent(data) {
  try {
    const saveStudentResult = yield call(saveStudentRequest, data.payload);
    if (saveStudentResult.status === 201) {
      yield put(saveStudentSuccess(saveStudentResult.data));
      yield put(showGlobalSuccessMsg("Student Successfully created."));
      yield delay(500);
      yield put(reset('admin-new-student-form'));
    } else {
      yield put(showGlobalErrorMsg(saveStudentResult.response.data.message));
    }
  } catch (error) {
    yield put(showGlobalErrorMsg(error));
  }
}

function* triggerUpdateStudent(data) {
  try {
    const updateStudentResult = yield call(updateStudentRequest, data.payload);
    if (updateStudentResult.status === 200) {
      yield put(updateStudentSuccess(updateStudentResult.data));
      yield put(showGlobalSuccessMsg("Student Successfully updated."));
      yield delay(500);
      yield put(push('/app/admin/students'));
    } else {
      yield put(showGlobalErrorMsg(updateStudentResult.response.data.message));
    }
  } catch (error) {
    yield put(showGlobalErrorMsg(error));
  }
}

export function* initiateStudents() {
  yield takeEvery(ADMIN_LOAD_STUDENTS, triggerLoadStudents);
}

export function* initiateSaveStudent() {
  yield takeEvery(ADMIN_SAVE_STUDENT, triggerSaveStudent);
}

export function* initiateUpdateStudent() {
  yield takeEvery(ADMIN_UPDATE_STUDENT, triggerUpdateStudent);
}

export default function* rootSaga() {
  yield all([
    fork(initiateStudents),
    fork(initiateSaveStudent),
    fork(initiateUpdateStudent)
  ]);
}
