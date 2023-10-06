import axios from "axios";

const deleteTask = async (taskId) =>
  await axios.delete(`https://tasksyncapi.azurewebsites.net/tasks/${taskId}`);

export default deleteTask;
