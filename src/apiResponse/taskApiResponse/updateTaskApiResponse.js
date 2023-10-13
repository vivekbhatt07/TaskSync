import axios from "axios";

const updateTaskApiResponse = async (taskId, updatedData) =>
  await axios.post(
    `https://tasksyncapi.azurewebsites.net/tasks/${taskId}`,
    updatedData
  );

export default updateTaskApiResponse;
