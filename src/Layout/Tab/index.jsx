import React, { useState } from "react";
import { tabData } from "./TabData";
import TabItem from "./TabItem";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useTask } from "../../Context";
import ModalProvider from "../../Components/ModalProvider";

const Tab = () => {
  const { addNewTask } = useTask();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const openAddModal = () => setIsAddModalOpen(true);
  const closeAddModal = () => setIsAddModalOpen(false);
  const [addTaskData, setAddTaskData] = useState({
    assignee: "",
    name: "",
    priority: "",
    status: "",
    summary: "",
    taskType: "",
    startDate: "",
    endDate: "",
  });

  const handleAddTask = (event) => {
    const { name, value } = event.target;
    setAddTaskData((prevAddTaskData) => {
      return { ...prevAddTaskData, [name]: value };
    });
  };

  const handleAddTaskSubmit = (event) => {
    event.preventDefault();
    addNewTask(addTaskData);
  };

  const priorityList = ["Low", "Medium", "High"];
  const StatusList = ["Ready", "In Progress", "Testing", "Done"];

  return (
    <ul className="bg-200 flex dark:bg-600">
      {tabData.map((currentTab) => {
        return <TabItem key={currentTab.id} {...currentTab} />;
      })}
      <ModalProvider
        title="ADD TASK"
        isOpen={isAddModalOpen}
        closeModal={closeAddModal}
        OpenModalAction={
          <Button variant="contained" onClick={openAddModal}>
            ADD TASK
          </Button>
        }
      >
        <form
          className="flex flex-col p-4 gap-6"
          onSubmit={handleAddTaskSubmit}
        >
          <div className="flex flex-col gap-4">
            <TextField
              label="Assignee Name"
              variant="outlined"
              name="assignee"
              value={addTaskData.assignee}
              onChange={handleAddTask}
            />
            <TextField
              label="Task Title"
              variant="outlined"
              name="name"
              value={addTaskData.name}
              onChange={handleAddTask}
            />
            <TextField
              label="Task Type"
              variant="outlined"
              name="taskType"
              value={addTaskData.taskType}
              onChange={handleAddTask}
            />
            <FormControl fullWidth>
              <InputLabel>Task Priority</InputLabel>
              <Select
                name="priority"
                value={addTaskData.priority}
                label="Task Priority"
                onChange={handleAddTask}
              >
                {priorityList.map((priority) => (
                  <MenuItem value={priority}>{priority}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>Task Status</InputLabel>
              <Select
                name="status"
                value={addTaskData.status}
                label="Task Status"
                onChange={handleAddTask}
              >
                {StatusList.map((status) => (
                  <MenuItem value={status}>{status}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="Task Summary"
              variant="outlined"
              name="summary"
              value={addTaskData.summary}
              onChange={handleAddTask}
            />
            <input
              type="date"
              name="startDate"
              value={addTaskData.startDate}
              onChange={handleAddTask}
            />
            <input
              type="date"
              name="endDate"
              value={addTaskData.endDate}
              onChange={handleAddTask}
            />
          </div>
          <div className="flex gap-3">
            <Button variant="contained" type="submit">
              Add
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                closeAddModal();
                setAddTaskData({
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
      </ModalProvider>
    </ul>
  );
};

export default Tab;
