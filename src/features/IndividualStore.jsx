import { createSlice } from '@reduxjs/toolkit';
import { people } from '../components/stories';

export const individualSlice = createSlice({
  name: 'individual',
  initialState: {
    value: people,
  },
  reducers: {
    test: (state, action) => {
      // console.log(action.payload);
      console.log(state);
    },
  },
});

export const { test } = individualSlice.actions;
export default individualSlice.reducer;
