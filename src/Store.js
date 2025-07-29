import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'

import pasteReducer from './redux/PasteSlice'
export const store = configureStore({
  reducer: {
   paste:pasteReducer,
  },
  
})


