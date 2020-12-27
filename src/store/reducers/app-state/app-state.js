import { ActionType } from '../../action';

const initialState = {
  isFormShown: false,
  isLoading: true,
  filters: {},
  updatingIssue: null,
};

const appState = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.TOGGLE_FORM: {
      return { ...state, isFormShown: !state.isFormShown, updatingIssue: action.payload || null };
    }
    case ActionType.TOGGLE_LOADING: {
      return { ...state, isLoading: !state.isLoading };
    }
    case ActionType.SET_FILTERS: {
      return { ...state, filters: action.payload };
    }
    default:
      return state;
  }
};

export { appState };
