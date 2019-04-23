import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { push } from "react-router-redux";
import { delay } from "redux-saga";
import { sendGETRequest, sendPOSTRequest, sendPUTRequest } from "../remote";
import {
  LOAD_PROJECTS,
  SAVE_PROJECT,
  UPDATE_PROJECT,
  LOAD_ACTIVE_PROJECTS,
  SAVE_PROJECT_SUBMISSIONS,
  UPDATE_PROJECT_SUBMISSIONS,
  LOAD_PROJECT_SUBMISSIONS
} from "constants/ActionTypes";
import {
  projectsLoaded,
  saveProjectSuccess,
  updateProjectSuccess,
  activeProjectsLoaded,
  saveProjectSubmissionsSuccess,
  updateProjectSubmissionsSuccess,
  projectSubmissionsLoaded
} from "actions/Projects";
import {
  showGlobalSuccessMsg,
  showGlobalErrorMsg
} from "../actions/Notifications";

const loadProjectsRequest = async () =>
  await sendGETRequest("/api/projects")
    .then(projects => projects)
    .catch(error => error);

const loadActiveProjectsRequest = async () =>
  await sendGETRequest("/api/projects/active")
    .then(projects => projects)
    .catch(error => error);

const loadProjectSubmissionsRequest = async projectId =>
  await sendGETRequest(`/api/project_submissions/${projectId}`)
    .then(projectSubmissions => projectSubmissions)
    .catch(error => error);

const saveProjectRequest = async project =>
  await sendPOSTRequest("/api/projects", project)
    .then(project => project)
    .catch(error => error);

const saveProjectSubmissionsRequest = async projectSubmissions =>
  await sendPOSTRequest("/api/project_submissions", projectSubmissions)
    .then(projectSubmissions => projectSubmissions)
    .catch(error => error);

const updateProjectRequest = async ({ id, project }) =>
  await sendPUTRequest(`/api/projects/${id}`, project)
    .then(project => project)
    .catch(error => error);

const updateProjectSubmissionsRequest = async (projectSubmissions) =>
  await sendPUTRequest(`/api/project_submissions`, projectSubmissions)
    .then(projectSubmissions => projectSubmissions)
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

function* triggerLoadProjectSubmissions(data) {
  try {
    const loadProjectSubmissionsResult = yield call(loadProjectSubmissionsRequest,data.payload);
    if (loadProjectSubmissionsResult.status === 200) {
      yield put(projectSubmissionsLoaded(loadProjectSubmissionsResult.data));
    } else {
      yield put(showGlobalErrorMsg(loadProjectSubmissionsResult.response.data.message));
    }
  } catch (error) {
    yield put(showGlobalErrorMsg(error));
  }
}

function* triggerLoadActiveProjects() {
  try {
    const loadActiveProjectsResult = yield call(loadActiveProjectsRequest);
    if (loadActiveProjectsResult.status === 200) {
      yield put(activeProjectsLoaded(loadActiveProjectsResult.data));
    } else {
      yield put(
        showGlobalErrorMsg(loadActiveProjectsResult.response.data.message)
      );
    }
  } catch (error) {
    yield put(showGlobalErrorMsg(error));
  }
}

function* triggerSaveProject(data) {
  try {
    const saveProjectResult = yield call(saveProjectRequest, data.payload);
    if (saveProjectResult.status === 201) {
      yield put(saveProjectSuccess(saveProjectResult.data));
      yield put(showGlobalSuccessMsg("Project Successfully created."));
      yield delay(500);
      yield put(push("/app/admin/projects"));
    } else {
      yield put(showGlobalErrorMsg(saveProjectResult.response.data.message));
    }
  } catch (error) {
    yield put(showGlobalErrorMsg(error));
  }
}
function* triggerSaveProjectSubmissions(data) {
  try {
    const saveProjectSubmissionsResult = yield call(
      saveProjectSubmissionsRequest,
      data.payload
    );
    if (saveProjectSubmissionsResult.status === 201) {
      yield put(
        saveProjectSubmissionsSuccess(saveProjectSubmissionsResult.data)
      );
      yield put(
        showGlobalSuccessMsg("Project Submissions Successfully created.")
      );
      yield delay(500);
      yield put(push("/app/project-coordinator/projects"));
    } else {
      yield put(
        showGlobalErrorMsg(saveProjectSubmissionsResult.response.data.message)
      );
    }
  } catch (error) {
    yield put(showGlobalErrorMsg(error));
  }
}

function* triggerUpdateProject(data) {
  try {
    const updateProjectResult = yield call(updateProjectRequest, data.payload);
    if (updateProjectResult.status === 200) {
      yield put(updateProjectSuccess(updateProjectResult.data));
      yield put(showGlobalSuccessMsg("Project Successfully updated."));
      yield delay(500);
      yield put(push("/app/admin/projects"));
    } else {
      yield put(showGlobalErrorMsg(updateProjectResult.response.data.message));
    }
  } catch (error) {
    yield put(showGlobalErrorMsg(error));
  }
}

function* triggerUpdateProjectSubmissions(data) {
  try {
    const updateProjectSubmissionsResult = yield call(
      updateProjectSubmissionsRequest,
      data.payload
    );
    if (updateProjectSubmissionsResult.status === 200) {
      yield put(
        updateProjectSubmissionsSuccess(updateProjectSubmissionsResult.data)
      );
      yield put(
        showGlobalSuccessMsg("Project Submissions Successfully updated.")
      );
      yield delay(500);
      yield put(push("/app/project-coordinator/projects"));
    } else {
      yield put(
        showGlobalErrorMsg(updateProjectSubmissionsResult.response.data.message)
      );
    }
  } catch (error) {
    yield put(showGlobalErrorMsg(error));
  }
}

export function* initiateProjects() {
  yield takeEvery(LOAD_PROJECTS, triggerLoadProjects);
}

export function* initiateProjectSubmissions() {
  yield takeEvery(LOAD_PROJECT_SUBMISSIONS, triggerLoadProjectSubmissions);
}

export function* initiateActiveProjects() {
  yield takeEvery(LOAD_ACTIVE_PROJECTS, triggerLoadActiveProjects);
}

export function* initiateSaveProject() {
  yield takeEvery(SAVE_PROJECT, triggerSaveProject);
}

export function* initiateSaveProjectSubmissions() {
  yield takeEvery(SAVE_PROJECT_SUBMISSIONS, triggerSaveProjectSubmissions);
}

export function* initiateUpdateProject() {
  yield takeEvery(UPDATE_PROJECT, triggerUpdateProject);
}

export function* initiateUpdateProjectSubmissions() {
  yield takeEvery(UPDATE_PROJECT_SUBMISSIONS, triggerUpdateProjectSubmissions);
}

export default function* rootSaga() {
  yield all([
    fork(initiateProjects),
    fork(initiateSaveProject),
    fork(initiateUpdateProject),
    fork(initiateActiveProjects),
    fork(initiateSaveProjectSubmissions),
    fork(initiateUpdateProjectSubmissions),
    fork(initiateProjectSubmissions)
  ]);
}
