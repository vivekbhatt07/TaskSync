import React, { useState, useEffect } from "react";
import { PageWrapper } from "../../Layout";
import { PrimaryCard, Filter, LightLoader, DarkLoader } from "../../Components";
import "./TaskTable.css";
import { useTheme } from "../../Context/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasksApiResponse } from "../../apiResponse/taskApiResponse";
import { setTask } from "../../features/task/taskSlice";

const TaskTable = () => {
  const taskList = useSelector((state) => state.task.allTaskList);

  return <PageWrapper>{/* <Filter /> */}</PageWrapper>;
};

export default TaskTable;
