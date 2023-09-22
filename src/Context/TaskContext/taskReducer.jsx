export const taskReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_DATA": {
      return { ...state, taskList: [...payload] };
    }

    case "ADD_NEW_TASK": {
      return {
        ...state,
        taskList: [...state.taskList, payload],
      };
    }

    case "UPDATE_TASK": {
      const updatedTaskList = state.taskList.map((task) => {
        return task._id === payload._id ? updatedTask : task;
      });

      return {
        ...state,
        taskList: [...updatedTaskList],
      };
    }

    case "DELETE_TASK": {
      const updatedTaskList = state.taskList.filter(
        (task) => task._id !== payload._id
      );
      return {
        ...state,
        taskList: [...updatedTaskList],
      };
    }

    case `FILTER_BY_${payload.label}`: {
      return {
        ...state,
        filterBy: {
          ...state.filterBy,
          [payload.label.toLowerCase()]: payload.value,
        },
      };
    }

    case "CLEAR_FILTER": {
      return {
        ...state,
        filterBy: {
          search: "",
          assignee: "",
          priority: "",
        },
      };
    }
  }
};
