import {ActionType} from "../../action";

const initialState = {
  issues: [],
  textEditorData: ``,
};

const appStore = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_ISSUE: {
      const _issues = state.issues.slice();
      _issues.push(action.payload);
      return {...state, issues: _issues};
    }
    case ActionType.LOAD_ISSUES: {
      return {...state, issues: action.payload};
    }
    default:
      return state;
  }
};

export {appStore};
