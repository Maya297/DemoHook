import { configureStore } from '@reduxjs/toolkit';
import reducSlice from './reducSlice';

const store = configureStore({
  reducer: reducSlice,
});

export default store;
