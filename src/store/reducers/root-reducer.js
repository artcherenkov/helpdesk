import {combineReducers} from "redux";
import {appStore} from "./app-store/app-store";

export const Namespace = {
  STORE: `STORE`
};

export default combineReducers({
  [Namespace.STORE]: appStore,
});
