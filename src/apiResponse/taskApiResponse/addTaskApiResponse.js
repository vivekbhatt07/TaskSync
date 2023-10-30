import axios from "axios";

const addTaskApiResponse = async (task) =>
  await axios.post("https://tasksyncapi.azurewebsites.net/tasks", task);

export default addTaskApiResponse;
