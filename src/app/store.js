import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import taskReducer from "../features/task/taskSlice";
import modalReducer from "../features/modal/modalSlice";

const logger = createLogger();

export const store = configureStore({
  reducer: {
    task: taskReducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
