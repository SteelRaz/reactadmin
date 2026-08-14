import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "../features/content/contentSlice"

const storeContent = configureStore({
  reducer: {
    content: contentReducer,
  },
});

export default storeContent;