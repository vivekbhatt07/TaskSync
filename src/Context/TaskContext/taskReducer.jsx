export const taskReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_DATA": {
      return { ...state, taskList: payload };
    }
    case `FILTER_BY_${payload.label}`: {
      return {
        ...state,
        filterBy: { ...state.filterBy, searchText: payload.value },
      };
    }
  }
};
