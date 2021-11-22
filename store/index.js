import { configureStore } from "@reduxjs/toolkit";

import main from "./mainSlice";

const store = configureStore({
  reducer: main,
});

export default store;
