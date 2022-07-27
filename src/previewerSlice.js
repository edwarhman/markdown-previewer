import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  raw: '',
};

export const previewerSlice = createSlice({
  name: 'previewer',
  initialState,
  reducers: {
    update: (state, action) => {
      state.raw = action.payload.raw;
    },
  },
});

export const { update } = previewerSlice.actions;

export default previewerSlice.reducer;
