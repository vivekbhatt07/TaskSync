import axios from "axios";

const addTask = async (task) =>
  await axios.post("https://tasksyncapi.azurewebsites.net/tasks", task);

export default addTask;
