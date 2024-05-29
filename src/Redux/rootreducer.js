// rootReducer.js
import { combineReducers } from "@reduxjs/toolkit";
import {
  authReducer,
  counterReducer,
  themeReducer,
  currentProblemsReducer,
} from "./slices";

const rootReducer = combineReducers({
  auth: authReducer,
  counter: counterReducer,
  theme: themeReducer,
  currentProblems: currentProblemsReducer,
});

export default rootReducer;
