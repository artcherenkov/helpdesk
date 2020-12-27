import {
  addIssue,
  loadIssues,
  toggleForm,
  toggleLoading,
  updateIssue as updateIssueSyncAction,
  deleteIssue as deleteIssueSyncAction,
  loadOrganizations,
} from './action';
import browserHistory from '../browser-history';

export const fetchIssues = () => (dispatch, _getState, api) => (
  api.get(`/issues`)
    .then(({ data }) => dispatch(loadIssues(data)))
    .catch((err) => console.log(err))
    .finally(() => dispatch(toggleLoading()))
);

export const postIssue = (issue) => (dispatch, _getState, api) => (
  api.post(`/issues`, issue)
    .then(({ data }) => dispatch(addIssue(data)))
    .then(() => dispatch(toggleForm()))
    .catch((err) => console.log(err))
    .finally(() => dispatch(toggleLoading()))
);

export const updateIssue = (id, updatedIssue) => (dispatch, _getState, api) => (
  api.patch(`/issues/${id}`, updatedIssue)
    .then(({ data }) => dispatch(updateIssueSyncAction(data)))
    .then(() => dispatch(toggleForm()))
    .catch((err) => console.log(`error: `, err))
    .finally(() => dispatch(toggleLoading()))
);

export const deleteIssue = (id) => (dispatch, _getState, api) => (
  api.delete(`/issues/${id}`)
    .then(() => dispatch(deleteIssueSyncAction(id)))
    .then(() => browserHistory.push(`/`))
    .catch((err) => console.log(`error: `, err))
    .finally(() => dispatch(toggleLoading()))
);

export const fetchOrganizations = () => (dispatch, _getState, api) => (
  api.get(`/organizations`)
    .then(({ data }) => dispatch(loadOrganizations(data)))
);
