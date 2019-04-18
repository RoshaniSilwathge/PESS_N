import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { delay } from 'redux-saga';
import { sendPOSTRequest } from "../remote";
import { SIGNIN_USER, SIGNOUT_USER,CHANGE_PASSWORD } from "constants/ActionTypes";
import {
  showAuthMessage,
  userSignInSuccess,
  userSignOutSuccess,
  userSignOut
} from "actions/Auth";
import { showGlobalSuccessMsg,showGlobalErrorMsg } from "../actions/Notifications";

const signInUserWithUsernamePasswordRequest = async (username, password) =>
  await sendPOSTRequest("/api/auth/signin", { username, password })
    .then(authUser => authUser)
    .catch(error => error);

const changePasswordRequest = async ({
  credentialId,
  currentPassword,
  newPassword
}) =>
  await sendPOSTRequest(`/api/auth/change/${credentialId}`, {
    currentPassword,
    newPassword
  })
    .then(response => response)
    .catch(error => error);

function* signIn({ payload }) {
  const { username, password } = payload;
  try {
    const signInResult = yield call(
      signInUserWithUsernamePasswordRequest,
      username,
      password
    );
    if (signInResult.response && signInResult.response.data.error) {
      yield put(showAuthMessage(signInResult.response.data.message));
    } else {
      localStorage.setItem("accessToken", signInResult.data.accessToken);
      yield put(userSignInSuccess(signInResult.data.accessToken));
    }
  } catch (error) {
    yield put(showAuthMessage(error));
  }
}


function* triggerChangePassword(data) {
    try {
      const changePasswordResult = yield call(changePasswordRequest,data.payload);
      if (changePasswordResult.status === 200) {
        yield put(showGlobalSuccessMsg('Password Successfully changed.'));
        yield delay(500);
        yield put(userSignOut());
      } else {
          yield put(showGlobalErrorMsg(changePasswordResult.response.data.message));
      }
    } catch (error) {
      yield put(showGlobalErrorMsg(error));
    }
  }

function* signOut() {
  localStorage.removeItem("accessToken");
  yield put(userSignOutSuccess(signOutUser));
}

export function* signInUser() {
  yield takeEvery(SIGNIN_USER, signIn);
}

export function* signOutUser() {
  yield takeEvery(SIGNOUT_USER, signOut);
}

export function* changePassword() {
  yield takeEvery(CHANGE_PASSWORD, triggerChangePassword);
}

export default function* rootSaga() {
  yield all([fork(signInUser), fork(signOutUser),fork(changePassword)]);
}
