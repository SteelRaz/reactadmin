import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "../reducer/contentSlice"

const storeContent = configureStore({
  reducer: {
    content: contentReducer,
  },
});

export default storeContent;