import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  raw: 'Hello World',
}

export const previewerSlice = createSlice({
  name: 'previewer',
  initialState,
  reducers: {
    update: (state, action) => {
      state.raw = action.payload
    },
  },
})

export const { update } = previewerSlice.actions

export default previewerSlice.reducer
