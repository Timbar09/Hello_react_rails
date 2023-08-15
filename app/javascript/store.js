import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './reducers/greetingsReducer';

const store = configureStore({
  reducer: {
    greetings: greetingsReducer,
  },
});

export default store;
