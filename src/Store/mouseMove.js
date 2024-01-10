import { createSlice } from "@reduxjs/toolkit";
const mouse = createSlice({
  name: "mouse",
  initialState: { move: false },
  reducers: {
    enter: (state) => {
      state.move = true;
    },
    leave: (state) => {
      state.move = false;
    },
  },
});
export const { enter, leave } = mouse.actions;
export default mouse.reducer;
