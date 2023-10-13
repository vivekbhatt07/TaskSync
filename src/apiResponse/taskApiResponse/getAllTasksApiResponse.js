import axios from "axios";

const getAllTasksApiResponse = async () =>
  await axios.get("https://tasksyncapi.azurewebsites.net/tasks");

export default getAllTasksApiResponse;
