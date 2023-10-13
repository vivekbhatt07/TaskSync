import { addTaskApiResponse } from "../../../apiResponse/taskApiResponse";
import { toastHandler } from "../../../Utils";

const addTaskAction = async (task, action) => {
  try {
    const response = await addTaskApiResponse(task);
    if (response.status === 201) {
      toastHandler("success", "Task Added");
      action(response.data.task);
    }
  } catch (error) {
    console.error(error);
  }
};

export default addTaskAction;
