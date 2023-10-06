import axios from "axios";

const updateTask = async (taskId, updatedData) =>
  await axios.post(
    `https://tasksyncapi.azurewebsites.net/tasks/${taskId}`,
    updatedData
  );

export default updateTask;
