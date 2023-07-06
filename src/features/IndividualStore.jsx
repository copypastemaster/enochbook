import { createSlice } from '@reduxjs/toolkit';
import { people } from '../components/stories';

export const individualSlice = createSlice({
  name: 'individual',
  initialState: {
    value: people,
  },
  reducers: {},
});

export default individualSlice.reducer;
