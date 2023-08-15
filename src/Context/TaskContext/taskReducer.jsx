export const taskReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_DATA": {
      return { ...state, taskList: payload };
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
