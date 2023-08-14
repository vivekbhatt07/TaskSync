export const taskReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_DATA": {
      return { ...state, taskList: payload };
    }
  }
};
