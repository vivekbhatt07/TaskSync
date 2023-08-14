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

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const [isLoading, setIsLoading] = useState(false);

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
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

const useTask = () => {
  return useContext(TaskContext);
};

export { useTask, TaskProvider };
