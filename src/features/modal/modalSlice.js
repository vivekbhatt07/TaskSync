import { createSlice } from "@reduxjs/toolkit";

export const modalInitialState = {
  open: false,
  type: null,
  payload: null,
};

export const MODALTYPES = {
  ADD_TASK_MODAL: "ADD_TASK_MODAL",
  UPDATE_TASK_MODAL: "UPDATE_TASK_MODAL",
};

export const modalSlice = createSlice({
  name: "modal",
  initialState: modalInitialState,
  reducers: {
    setModal: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setModal } = modalSlice.actions;

export default modalSlice.reducer;
