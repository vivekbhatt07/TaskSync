import { toastHandler } from "../../../Utils";

const updateTaskAction = async (taskId, updatedTask, action) => {
  try {
    const response = await axios.post(
      `https://tasksyncapi.azurewebsites.net/tasks/${taskId}`,
      updatedTask
    );
    if (response.status === 200) {
      toastHandler("success", "Task Updated");
      action(response.data?.updatedTask);
    }
  } catch (error) {
    console.error(error);
  }
};

export default updateTaskAction;
