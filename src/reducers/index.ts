import { combineReducers } from "redux";

import loadReducer from "./loadReducer";
import imageReducer from "./imageReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  isLoading: loadReducer,
  images: imageReducer,
  error: errorReducer
});

export default rootReducer;
