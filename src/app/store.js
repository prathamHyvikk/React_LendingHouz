import { configureStore } from '@reduxjs/toolkit'
import personRole from '../features/personRole'

export default configureStore({
  reducer: {
    person: personRole
  }
})