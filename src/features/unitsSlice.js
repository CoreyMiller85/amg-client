import { createSlice } from '@reduxjs/toolkit';

export const unitsSlice = createSlice({
  name: 'unitsData',
  initialState: {
    value: [],
  },

  reducers: {
    setUnits: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { setUnits } = unitsSlice.actions;

export default unitsSlice.reducer;
