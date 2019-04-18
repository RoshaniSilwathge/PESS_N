import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { push } from 'react-router-redux';
import { delay } from 'redux-saga';
import { sendGETRequest, sendPOSTRequest, sendPUTRequest } from "../remote";
import { ADMIN_LOAD_PROJECTS ,ADMIN_SAVE_PROJECT,ADMIN_UPDATE_PROJECT} from "constants/ActionTypes";
import { projectsLoaded,saveProjectSuccess ,updateProjectSuccess} from "actions/admin/Projects";
import { showGlobalSuccessMsg,showGlobalErrorMsg } from "../actions/Notifications";

const loadProjectsRequest = async () =>
  await sendGETRequest("/api/projects")
    .then(projects => projects)
    .catch(error => error);

const saveProjectRequest = async (project) =>
    await sendPOSTRequest("/api/projects",project)
      .then(project => project)
      .catch(error => error);
const updateProjectRequest = async ({id,project}) =>
      await sendPUTRequest(`/api/projects/${id}`,project)
        .then(project => project)
        .catch(error => error);

function* triggerLoadProjects() {
  try {
    const loadProjectsResult = yield call(loadProjectsRequest);
    if (loadProjectsResult.status === 200) {
      yield put(projectsLoaded(loadProjectsResult.data));
    } else {
      yield put(showGlobalErrorMsg(loadProjectsResult.response.data.message));
    }
  } catch (error) {
    yield put(showGlobalErrorMsg(error));
  }
}

function* triggerSaveProject(data) {
  try {
    const saveProjectResult = yield call(saveProjectRequest,data.payload);
    if (saveProjectResult.status === 201) {
      yield put(saveProjectSuccess(saveProjectResult.data));
      yield put(showGlobalSuccessMsg('Project Successfully created.'));
      yield delay(500);
      yield put(push('/app/admin/projects'));
    } else {
      yield put(showGlobalErrorMsg(saveProjectResult.response.data.message));
    }
  } catch (error) {
    yield put(showGlobalErrorMsg(error));
  }
}


function* triggerUpdateProject(data) {
  try {
    const updateProjectResult = yield call(updateProjectRequest,data.payload);
    if (updateProjectResult.status === 200) {
      yield put(updateProjectSuccess(updateProjectResult.data));
      yield put(showGlobalSuccessMsg('Project Successfully updated.'));
      yield delay(500);
      yield put(push('/app/admin/projects'));
    } else {
      yield put(showGlobalErrorMsg(updateProjectResult.response.data.message));
    }
  } catch (error) {
    yield put(showGlobalErrorMsg(error));
  }
}

export function* initiateProjects() {
  yield takeEvery(ADMIN_LOAD_PROJECTS, triggerLoadProjects);
}

export function* initiateSaveProject() {
  yield takeEvery(ADMIN_SAVE_PROJECT, triggerSaveProject);
}

export function* initiateUpdateProject() {
  yield takeEvery(ADMIN_UPDATE_PROJECT, triggerUpdateProject);
}

export default function* rootSaga() {
  yield all([fork(initiateProjects),fork(initiateSaveProject),fork(initiateUpdateProject)]);
}
