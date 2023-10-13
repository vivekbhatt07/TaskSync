import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialTaskState = {
  isLoading: false,
  allTaskList: [],
  error: "",
  // readyTaskList: [],
  // inProgressList: [],
  // testingList: [],
  // doneList: [],
};

export const taskSlice = createSlice({
  name: "task",
  initialState: initialTaskState,
  reducers: {
    setTask: (state, action) => {
      state.allTaskList = action.payload;
    },
    addTask: (state, action) => {
      state.allTaskList.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.allTaskList = state.allTaskList.filter(
        (task) => task._id !== action.payload
      );
    },
    updateTask: (state, action) => {
      state.allTaskList = state.allTaskList.map((task) =>
        task._id === action.payload._id ? action.payload : task
      );
    },
  },
});

export const { setTask, addTask, deleteTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
