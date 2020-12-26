import { addIssue, loadIssues, toggleForm, toggleLoading } from './action';

export const fetchIssues = () => (dispatch, _getState, api) => (
  api.get(`/issues`)
    .then(({ data }) => dispatch(loadIssues(data)))
    .then(() => dispatch(toggleLoading()))
);

export const postIssue = (issue) => (dispatch, _getState, api) => (
  api.post(`/issues`, issue)
    .then(({ data }) => dispatch(addIssue(data)))
    .then(() => {
      dispatch(toggleForm());
      dispatch(toggleLoading());
    })
    .catch(() => dispatch(toggleLoading()))
);
