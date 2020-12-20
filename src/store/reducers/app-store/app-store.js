import {ActionType} from "../../action";

const initialState = {
  requests: [],
  html: ``,
};

const appStore = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_REQUEST: {
      const _requests = state.requests.slice();
      _requests.push(action.payload);
      return {...state, requests: _requests};
    }
    case ActionType.LOAD_REQUESTS: {
      return {...state, requests: action.payload};
    }
    case ActionType.SAVE_TEXT: {
      return {...state, html: action.payload};
    }
    default:
      return state;
  }
};

export {appStore};
