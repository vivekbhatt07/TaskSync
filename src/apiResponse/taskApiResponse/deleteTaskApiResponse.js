import axios from "axios";

const deleteTaskApiResponse = async (taskId) =>
  await axios.delete(`https://tasksyncapi.azurewebsites.net/tasks/${taskId}`);

export default deleteTaskApiResponse;
