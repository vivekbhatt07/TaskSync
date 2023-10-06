import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [{ id: 1, text: Hello }],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setTask: (state, action) => {
      return;
    },
    addTask: (state, action) => {},
    deleteTask: (state, action) => {},
    updateTask: (state, action) => {},
  },
});

export const { ADD_TASK, DELETE_TASK, UPDATE_TASK } = taskSlice.actions;
export default taskSlice.reducer;
