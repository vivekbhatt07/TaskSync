import React, { useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const AddUpdateForm = (props) => {
  const { closeForm, formAction, isEdit } = props;
  const [taskFormData, setTaskFormData] = useState({
    assignee: isEdit ? isEdit?.assignee : "",
    name: isEdit ? isEdit?.name : "",
    priority: isEdit ? isEdit?.priority : "",
    status: isEdit ? isEdit?.status : "",
    summary: isEdit ? isEdit?.summary : "",
    taskType: isEdit ? isEdit?.taskType : "",
    startDate: isEdit ? isEdit?.startDate : "",
    endDate: isEdit ? isEdit?.endDate : "",
  });

  const handleAddTask = (event) => {
    const { name, value } = event.target;
    setTaskFormData((prevTaskFormData) => {
      return { ...prevTaskFormData, [name]: value };
    });
  };

  const handleAddTaskSubmit = (event) => {
    event.preventDefault();
    if (isEdit) {
      formAction(isEdit?._id, taskFormData);
    } else {
      formAction(taskFormData);
    }
    closeForm();
  };

  const priorityList = ["Low", "Medium", "High"];
  const StatusList = ["Ready", "In Progress", "Testing", "Done"];
  return (
    <form className="flex flex-col p-4 gap-6" onSubmit={handleAddTaskSubmit}>
      <div className="flex flex-col gap-4">
        <TextField
          label="Assignee Name"
          variant="outlined"
          name="assignee"
          value={taskFormData.assignee}
          onChange={handleAddTask}
          required
        />
        <TextField
          label="Task Title"
          variant="outlined"
          name="name"
          value={taskFormData.name}
          onChange={handleAddTask}
          required
        />
        <TextField
          label="Task Type"
          variant="outlined"
          name="taskType"
          value={taskFormData.taskType}
          onChange={handleAddTask}
          required
        />
        <FormControl fullWidth required>
          <InputLabel>Task Priority</InputLabel>
          <Select
            name="priority"
            value={taskFormData.priority}
            label="Task Priority"
            onChange={handleAddTask}
          >
            {priorityList.map((priority, priorityIndex) => (
              <MenuItem value={priority} key={priorityIndex}>
                {priority}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth required>
          <InputLabel>Task Status</InputLabel>
          <Select
            name="status"
            value={taskFormData.status}
            label="Task Status"
            onChange={handleAddTask}
          >
            {StatusList.map((status, statusIndex) => (
              <MenuItem value={status} key={statusIndex}>
                {status}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          label="Task Summary"
          variant="outlined"
          name="summary"
          value={taskFormData.summary}
          onChange={handleAddTask}
          required
        />
        <input
          type="date"
          name="startDate"
          value={taskFormData.startDate}
          onChange={handleAddTask}
          required
        />
        <input
          type="date"
          name="endDate"
          value={taskFormData.endDate}
          onChange={handleAddTask}
          required
        />
      </div>
      <div className="flex gap-3">
        <Button variant="contained" type="submit">
          {isEdit ? "UPDATE" : "ADD"}
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            closeForm();
            setTaskFormData({
              assignee: "",
              name: "",
              priority: "",
              status: "",
              summary: "",
              taskType: "",
              startDate: "",
              endDate: "",
            });
          }}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default AddUpdateForm;
