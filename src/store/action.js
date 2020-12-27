// todo отрефакторить имена экшенов
export const ActionType = {
  ADD_ISSUE: `ADD_ISSUE`,
  LOAD_ISSUES: `LOAD_ISSUES`,
  UPDATE_ISSUE: `UPDATE_ISSUE`,
  TOGGLE_FORM: `TOGGLE_FORM`,
  TOGGLE_LOADING: `TOGGLE_LOADING`,
  SET_FILTERS: `SET_FILTERS`,
  DELETE_ISSUE: `DELETE_ISSUE`,
  LOAD_ORGANIZATIONS: `LOAD_ORGANIZATIONS`,
};

export const addIssue = (issue) => ({
  type: ActionType.ADD_ISSUE,
  payload: issue,
});

export const deleteIssue = (id) => ({
  type: ActionType.DELETE_ISSUE,
  payload: id,
});

export const loadIssues = (issues) => ({
  type: ActionType.LOAD_ISSUES,
  payload: issues,
});

export const loadOrganizations = (organizations) => ({
  type: ActionType.LOAD_ORGANIZATIONS,
  payload: organizations,
});

export const updateIssue = (issue) => ({
  type: ActionType.UPDATE_ISSUE,
  payload: issue,
});

export const toggleForm = (updatingIssue) => ({
  type: ActionType.TOGGLE_FORM,
  payload: updatingIssue,
});

export const toggleLoading = () => ({
  type: ActionType.TOGGLE_LOADING,
});

export const setFilters = (filters) => ({
  type: ActionType.SET_FILTERS,
  payload: filters,
});
