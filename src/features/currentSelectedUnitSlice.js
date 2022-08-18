import { createSlice } from '@reduxjs/toolkit';

export const currentSelectedUnitSlice = createSlice({
  name: 'currentSelectedUnit',
  initialState: {
    address: '',
  },

  reducers: {
    setCurrentSelectedUnit: (state, action) => {
      state.address = action.payload;
    },
  },
});
export const { setCurrentSelectedUnit } = currentSelectedUnitSlice.actions;

export default currentSelectedUnitSlice.reducer;
