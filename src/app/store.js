import { configureStore } from '@reduxjs/toolkit'
import previewerReducer from '../previewerSlice'

export const store = configureStore({
  reducer: {
    previewer: previewerReducer,
  },
})
