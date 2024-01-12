import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setGlobalState: (state, action) => {
        return {
            ...state,
            ...action.payload
          };
      
    },
  },
});

export const { setGlobalState } = globalSlice.actions;

export default globalSlice.reducer;