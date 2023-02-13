import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import stepReducer from "./stepSlice";
import userDataReducer from "./userDataSlice";

const reducer = combineReducers({
  // here we will be adding reducers
  stepSlice: stepReducer,
  userDataSlice: userDataReducer,
});
const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

const store = configureStore({
  reducer,
  devTools: true,
  customizedMiddleware,
});

export default store;
