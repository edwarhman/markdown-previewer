import { createSlice } from '@reduxjs/toolkit'

// fullscreen state enum
export const fullscreenType = {
  OFF: 'off',
  EDITOR: 'editor',
  PREVIEW: 'preview',
}

// initial state
const initialState = {
  raw: 'Hello World',
  fullscreen: false,
}

export const previewerSlice = createSlice({
  name: 'previewer',
  initialState,
  reducers: {
    update: (state, action) => {
      state.raw = action.payload
    },
    toogleFullscreen: (state, action) => {
      if (state.fullscreen !== fullscreenType.OFF) {
        state.fullscreen = fullscreenType.OFF
      } else {
        state.fullscreen = action.payload
      }
    },
  },
})

export const { update, toogleFullscreen } = previewerSlice.actions
export default previewerSlice.reducer
