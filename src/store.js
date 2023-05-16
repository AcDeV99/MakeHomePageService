import { configureStore, createSlice } from '@reduxjs/toolkit';

// example
let isSign = createSlice({
  name: 'isSign',
  initialState: false,
});

export default configureStore({
  reducer: {
    isSign: isSign.reducer,
  },
});
