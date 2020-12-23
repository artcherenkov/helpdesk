import {ActionType} from "../../action";

const initialState = {
  isFormShown: false,
  isLoading: true
};

const appState = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.TOGGLE_FORM: {
      return {...state, isFormShown: !state.isFormShown};
    }
    case ActionType.TOGGLE_LOADING: {
      return {...state, isLoading: !state.isLoading};
    }
    default:
      return state;
  }
};

export {appState};
