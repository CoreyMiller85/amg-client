import { configureStore } from '@reduxjs/toolkit';
import currentSelectedUnitReducer from '../features/currentSelectedUnitSlice';
export default configureStore({
  reducer: {
    currentSelectedUnit: currentSelectedUnitReducer,
  },
});
