import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import axios from "axios";
import { initialState } from "./initialState";
import { taskReducer } from "./taskReducer";
import { simplifiedString, toastHandler } from "../../Utils";

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const [isLoading, setIsLoading] = useState(false);

  let filteredTaskList = state.taskList;

  // FILTER BY SEARCH:

  if (state.filterBy.search) {
    filteredTaskList = filteredTaskList.filter((currentTask) => {
      return (
        simplifiedString(currentTask.name).includes(
          simplifiedString(state.filterBy.search)
        ) ||
        simplifiedString(currentTask.assignee).includes(
          simplifiedString(state.filterBy.search)
        ) ||
        simplifiedString(currentTask.type).includes(
          simplifiedString(state.filterBy.search)
        )
      );
    });
  }

  // FILTER BY ASSIGNEE:

  if (state.filterBy.assignee) {
    state.selectedAssigneeList = state.selectedAssigneeList.some((current) => {
      return current == state.filterBy.assignee;
    })
      ? state.selectedAssigneeList.filter((currentAssignee) => {
          return currentAssignee !== state.filterBy.assignee;
        })
      : [...state.selectedAssigneeList, state.filterBy.assignee];

    filteredTaskList =
      state.selectedAssigneeList.length !== 0
        ? filteredTaskList.filter((currentTask) => {
            return state.selectedAssigneeList.includes(currentTask.assignee);
          })
        : filteredTaskList;
  }

  if (state.filterBy.priority) {
    filteredTaskList = filteredTaskList.filter((currentTask) => {
      return currentTask.priority == state.filterBy.priority;
    });
  }

  // CRUD OPERATIONS:

  const getAllTasks = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://tasksyncapi.azurewebsites.net/tasks"
      );
      if (response.status === 200) {
        dispatch({ type: "SET_DATA", payload: response.data });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const addNewTask = async (task) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://tasksyncapi.azurewebsites.net/tasks",
        task
      );

      if (response.status === 201) {
        toastHandler("success", "Task Added");
        dispatch({ type: "ADD_NEW_TASK", payload: response.data.task });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateTask = async (taskId, updatedData) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        `https://tasksyncapi.azurewebsites.net/tasks/${taskId}`,
        updatedData
      );
      if (response.status === 200) {
        toastHandler("success", "Task Updated");
        dispatch({ type: "UPDATE_TASK", payload: response.data?.updatedTask });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteTask = async (taskId) => {
    setIsLoading(true);
    try {
      const response = await axios.delete(
        `https://tasksyncapi.azurewebsites.net/tasks/${taskId}`
      );
      if (response.status === 200) {
        toastHandler("delete", "Task Deleted");
        dispatch({ type: "DELETE_TASK", payload: response.data.deletedTask });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  return (
    <TaskContext.Provider
      value={{
        state,
        dispatch,
        filteredTaskList,
        isLoading,
        getAllTasks,
        addNewTask,
        updateTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

const useTask = () => {
  return useContext(TaskContext);
};

export { useTask, TaskProvider };
