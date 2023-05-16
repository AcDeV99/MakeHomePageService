import { createSlice } from '@reduxjs/toolkit';

let background = createSlice({
  name: 'background',
  initialState: 'homeGuide',
  reducers: {
    changeBackground(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export let { changeBackground } = background.actions;
export default background;
