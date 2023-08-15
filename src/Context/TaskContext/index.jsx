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
import { simplifiedString } from "../../Utils";

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

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://gcp-mock.apiwiz.io/v1/tasks",
          { headers: "x-tenant: b4349714-47c7-4605-a81c-df509fc7e653" }
        );
        if (response.status === 200) {
          dispatch({ type: "SET_DATA", payload: response.data });
        }
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <TaskContext.Provider value={{ state, dispatch, filteredTaskList }}>
      {children}
    </TaskContext.Provider>
  );
};

const useTask = () => {
  return useContext(TaskContext);
};

export { useTask, TaskProvider };
