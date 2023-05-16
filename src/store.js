import { configureStore } from '@reduxjs/toolkit';
import background from './store/backgroundSlice.js';

export default configureStore({
  reducer: {
    background: background.reducer,
  },
});
