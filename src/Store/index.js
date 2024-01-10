import { configureStore } from "@reduxjs/toolkit";
import mouseReducer from "./mouseMove";
import loadReducer from "./load";
const store = configureStore({
  reducer: {
    mouse: mouseReducer,
    load: loadReducer,
  },
});

export default store;
