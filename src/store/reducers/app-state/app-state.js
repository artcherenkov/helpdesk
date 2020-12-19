import {ActionType} from "../../action";

const initialState = {
  isFormShown: false,
};

const appState = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.TOGGLE_FORM: {
      return {...state, isFormShown: !state.isFormShown};
    }
    default:
      return state;
  }
};

export {appState};
