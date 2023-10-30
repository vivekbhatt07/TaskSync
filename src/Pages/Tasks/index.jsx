import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { DragDropContext } from "react-beautiful-dnd";
import { PageWrapper } from "../../Layout";
import { PrimaryCard, Filter, LightLoader, DarkLoader } from "../../Components";
import "./Tasks.css";
import { useTheme } from "../../Context/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasksApiResponse } from "../../apiResponse/taskApiResponse";
import { setTask } from "../../features/task/taskSlice";
import { setModal } from "../../features/modal/modalSlice.js";

const taskStatusList = ["Ready", "In Progress", "Testing", "Done"];

const Tasks = () => {
  const taskList = useSelector((state) => state.task.allTaskList);

  const dispatch = useDispatch();

  const { isDarkTheme } = useTheme();

  const getAllTasksHandler = async () => {
    try {
      const response = await getAllTasksApiResponse();
      if (response.status === 200) {
        dispatch(setTask(response.data));
      }
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;
    let updatingTask;
    let taskPlacementIndex = -1;
    let destinationIndexesCount = 0;
    let changedTask = taskList.filter((task, index) => {
      if (
        destinationIndexesCount < destination.index &&
        task.status === destination.droppableId
      ) {
        destinationIndexesCount++;
      } else if (
        destinationIndexesCount === destination.index &&
        taskPlacementIndex === -1
      ) {
        taskPlacementIndex = index;
      }
      if (`${task._id}` === `${draggableId}`) {
        updatingTask = task;
        return false;
      }
      return true;
    });

    const updatedTaskList = [
      ...changedTask.slice(0, taskPlacementIndex),
      { ...updatingTask, status: destination.droppableId },
      ...changedTask.slice(taskPlacementIndex),
    ];

    dispatch(setTask(updatedTaskList));
  };

  useEffect(() => {
    getAllTasksHandler();
  }, []);

  return (
    <PageWrapper>
      {/* <Filter /> */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="p-8 task_list">
          {/* {isLoading && (isDarkTheme ? <DarkLoader /> : <LightLoader />)} */}
          {taskStatusList.map((currentTask, currentIndex) => {
            return <PrimaryCard key={currentIndex} cardVariant={currentTask} />;
          })}
        </div>
      </DragDropContext>
    </PageWrapper>
  );
};

export default Tasks;
