import { configureStore } from '@reduxjs/toolkit';
import currentSelectedUnitReducer from '../features/currentSelectedUnitSlice';
import unitsSliceReducer from '../features/unitsSlice';
import unitSearchReducer from '../features/unitSearchSlice';
export default configureStore({
  reducer: {
    currentSelectedUnit: currentSelectedUnitReducer,
    unitsData: unitsSliceReducer,
    unitSearch: unitSearchReducer,
  },
});
