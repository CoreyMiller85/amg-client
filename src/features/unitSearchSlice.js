import { createSlice } from '@reduxjs/toolkit';

export const unitSearchSlice = createSlice({
  name: 'unitSearch',
  initialState: {
    isSearching: false,
  },

  reducers: {
    setSearchingTrue: (state) => {
      state.isSearching = true;
    },

    setSearchingFalse: (state) => {
      state.isSearching = false;
    },
  },
});
export const { setSearchingTrue, setSearchingFalse } = unitSearchSlice.actions;

export default unitSearchSlice.reducer;
