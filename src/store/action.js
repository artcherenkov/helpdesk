export const ActionType = {
  ADD_ISSUE: `ADD_ISSUE`,
  LOAD_ISSUES: `LOAD_ISSUES`,
  TOGGLE_FORM: `TOGGLE_FORM`,
  TOGGLE_LOADING: `TOGGLE_LOADING`,
  SET_FILTERS: `SET_FILTERS`,
};

export const addIssue = (issue) => ({
  type: ActionType.ADD_ISSUE,
  payload: issue,
});

export const loadIssues = (issues) => ({
  type: ActionType.LOAD_ISSUES,
  payload: issues,
});

export const toggleForm = () => ({
  type: ActionType.TOGGLE_FORM,
});

export const toggleLoading = () => ({
  type: ActionType.TOGGLE_LOADING,
});

export const setFilters = (filters) => ({
  type: ActionType.SET_FILTERS,
  payload: filters,
});
