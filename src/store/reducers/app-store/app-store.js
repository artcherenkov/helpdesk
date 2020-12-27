import { ActionType } from '../../action';

const initialState = {
  issues: [],
  textEditorData: ``,
};

const appStore = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_ISSUE: {
      const _issues = state.issues.slice();
      _issues.push(action.payload);
      return { ...state, issues: _issues };
    }
    case ActionType.LOAD_ISSUES: {
      return { ...state, issues: action.payload };
    }
    case ActionType.UPDATE_ISSUE: {
      let issues = state.issues.slice();
      issues = issues.map(issue => issue.id === action.payload.id ? action.payload : issue);
      return { ...state, issues };
    }
    case ActionType.DELETE_ISSUE: {
      let issues = state.issues.slice();
      issues = issues.filter(issue => issue._id !== action.payload);
      return { ...state, issues };
    }
    default:
      return state;
  }
};

export { appStore };
