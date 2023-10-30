import React, { useState, useEffect } from "react";
import { PageWrapper } from "../../Layout";
import { PrimaryCard, Filter, LightLoader, DarkLoader } from "../../Components";
import "./TaskTable.css";
import { useTheme } from "../../Context/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasksApiResponse } from "../../apiResponse/taskApiResponse";
import { setTask } from "../../features/task/taskSlice";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const TaskTable = () => {
  const taskList = useSelector((state) => state.task.allTaskList);

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];
  return (
    <PageWrapper>
      <div style={{ padding: "32px" }}>
        {" "}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "#ddd" }}>
                <TableCell
                  sx={{ fontSize: "18px", textTransform: "capitalize" }}
                >
                  Name
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ fontSize: "18px", textTransform: "capitalize" }}
                >
                  Assignee
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ fontSize: "18px", textTransform: "capitalize" }}
                >
                  Priority
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ fontSize: "18px", textTransform: "capitalize" }}
                >
                  Status
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ fontSize: "18px", textTransform: "capitalize" }}
                >
                  Task Type
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {taskList.map((task) => (
                <TableRow
                  key={task.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {task.name}
                  </TableCell>
                  <TableCell align="left">{task.assignee}</TableCell>
                  <TableCell align="left">{task.priority}</TableCell>
                  <TableCell align="left">{task.status}</TableCell>
                  <TableCell align="left">{task.taskType}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </PageWrapper>
  );
};

export default TaskTable;
