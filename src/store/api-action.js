import {loadIssues} from './action';

export const fetchIssues = () => (dispatch, _getState, api) => (
  api.get(`/issues`)
    .then(({data}) => dispatch(loadIssues(data)))
);

export const postIssue = (issue) => (dispatch, _getState, api) => (
  api.post(`/issues`, {issue})
    .then(({data}) => dispatch(loadIssues(data)))
);
