// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootreducer'; // Import your root reducer

const store = configureStore({
  reducer: rootReducer,
});

export default store;
  