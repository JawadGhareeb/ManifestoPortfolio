import { createSlice } from "@reduxjs/toolkit";
const load = createSlice({
  name: "load",
  initialState: { load: false, animate: false },
  reducers: {
    Load: (state) => {
      state.load = true;
    },
    afterClick: (state) => {
      state.animate = true;
    },
  },
});
export const { Load } = load.actions;
export default load.reducer;
