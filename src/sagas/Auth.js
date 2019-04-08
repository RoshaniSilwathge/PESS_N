import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import {sendPOSTRequest} from '../remote';
import {
    SIGNIN_USER,
    SIGNOUT_USER
} from "constants/ActionTypes";
import {showAuthMessage, userSignInSuccess, userSignOutSuccess} from "actions/Auth";

const signInUserWithUsernamePasswordRequest = async (username, password) =>
    await  sendPOSTRequest('/api/auth/signin',{username, password})
        .then(authUser => authUser)
        .catch(error => error);

function* signIn({payload}) {
    const {username, password} = payload;
    try {
        const signInResult = yield call(signInUserWithUsernamePasswordRequest, username, password);
        if(signInResult.response && signInResult.response.data.error){
            yield put(showAuthMessage(signInResult.response.data.message));
        } else {
            localStorage.setItem('accessToken', signInResult.data.accessToken);
            yield put(userSignInSuccess(signInResult.data.accessToken));
        }
    } catch (error) {
        yield put(showAuthMessage(error));
    }
}

function* signOut() {
    localStorage.removeItem('accessToken');
    yield put(userSignOutSuccess(signOutUser));
}

export function* signInUser() {
    yield takeEvery(SIGNIN_USER, signIn);
}

export function* signOutUser() {
    yield takeEvery(SIGNOUT_USER, signOut);
}

export default function* rootSaga() {
    yield all([fork(signInUser),
        fork(signOutUser)]);
}