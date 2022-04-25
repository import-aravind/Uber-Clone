import { configureStore } from '@reduxjs/toolkit';
import navreducer  from './slices/navslice';

export default store = configureStore({
  reducer : {
    nav:navreducer,
  },
});