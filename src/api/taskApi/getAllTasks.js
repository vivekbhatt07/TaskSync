import axios from "axios";

const getAllTasks = async () =>
  await axios.get("https://tasksyncapi.azurewebsites.net/tasks");

export default getAllTasks;
