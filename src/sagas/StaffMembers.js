import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { push } from 'react-router-redux';
import { delay } from 'redux-saga';
import {
  sendGETRequest,
  sendPOSTRequest,
  sendPUTRequest
} from "../remote";
import {
  ADMIN_LOAD_STAFF_MEMBERS,
  ADMIN_SAVE_STAFF_MEMBER,
  ADMIN_UPDATE_STAFF_MEMBER
} from "constants/ActionTypes";
import {
  staffMembersLoaded,
  saveStaffMemberSuccess,
  updateStaffMemberSuccess
} from "actions/admin/StaffMembers";
import {
  showGlobalSuccessMsg,
  showGlobalErrorMsg
} from "../actions/Notifications";

const loadStaffMembersRequest = async () =>
  await sendGETRequest("/api/staff_members")
    .then(staffMembers => staffMembers)
    .catch(error => error);

const saveStaffMemberRequest = async staffMember =>
  await sendPOSTRequest("/api/staff_members", staffMember)
    .then(staffMember => staffMember)
    .catch(error => error);

const updateStaffMemberRequest = async ({ id, staffMember }) =>
  await sendPUTRequest(`/api/staff_members/${id}`, staffMember)
    .then(staffMember => staffMember)
    .catch(error => error);

function* triggerLoadStaffMembers() {
  try {
    const loadStaffMembersResult = yield call(loadStaffMembersRequest);
    if (loadStaffMembersResult.status === 200) {
      yield put(staffMembersLoaded(loadStaffMembersResult.data));
    } else {
      yield put(
        showGlobalErrorMsg(loadStaffMembersResult.response.data.message)
      );
    }
  } catch (error) {
    yield put(showGlobalErrorMsg(error));
  }
}

function* triggerSaveStaffMember(staffMember) {
  try {
    const saveStaffMemberResult = yield call(
      saveStaffMemberRequest,
      staffMember.payload
    );
    if (saveStaffMemberResult.status === 201) {
      yield put(saveStaffMemberSuccess(saveStaffMemberResult.data));
      yield put(showGlobalSuccessMsg("Staff Member Successfully created."));
      yield delay(500);
      yield put(push('/app/admin/staff-members'));
    } else {
      yield put(
        showGlobalErrorMsg(saveStaffMemberResult.response.data.message)
      );
    }
  } catch (error) {
    yield put(showGlobalErrorMsg(error));
  }
}

function* triggerUpdateStaffMember(data) {
  try {
    const updateStaffMemberResult = yield call(
      updateStaffMemberRequest,
      data.payload
    );
    if (updateStaffMemberResult.status === 200) {
      yield put(updateStaffMemberSuccess(updateStaffMemberResult.data));
      yield put(showGlobalSuccessMsg("Staff Member Successfully updated."));
      yield delay(500);
      yield put(push('/app/admin/staff-members'));
    } else {
      yield put(
        showGlobalErrorMsg(updateStaffMemberResult.response.data.message)
      );
    }
  } catch (error) {
    yield put(showGlobalErrorMsg(error));
  }
}

export function* initiateStaffMembers() {
  yield takeEvery(ADMIN_LOAD_STAFF_MEMBERS, triggerLoadStaffMembers);
}

export function* initiateSaveStaffMember() {
  yield takeEvery(ADMIN_SAVE_STAFF_MEMBER, triggerSaveStaffMember);
}

export function* initiateUpdateStaffMember() {
  yield takeEvery(ADMIN_UPDATE_STAFF_MEMBER, triggerUpdateStaffMember);
}

export default function* rootSaga() {
  yield all([
    fork(initiateStaffMembers),
    fork(initiateSaveStaffMember),
    fork(initiateUpdateStaffMember)
  ]);
}
