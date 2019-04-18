import {all} from 'redux-saga/effects';
import authSagas from './Auth';
import staffMembersSagas from './StaffMembers';
import projectsSagas from './Projects';
import studentsSagas from './Student';

export default function* rootSaga(getState) {
    yield all([
        authSagas(),
        staffMembersSagas(),
        projectsSagas(),
        studentsSagas()
    ]);
}
