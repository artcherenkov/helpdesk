import { addIssue, loadIssues, toggleForm, toggleLoading, updateIssue as updateIssueSyncAction } from './action';

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
