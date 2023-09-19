import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { PageWrapper } from "../../Layout";
import { useTask } from "../../Context/TaskContext";
import { PrimaryCard, Filter, LightLoader, DarkLoader } from "../../Components";
import "./Tasks.css";
import { useTheme } from "../../Context/ThemeContext";

const taskStatusList = ["Ready", "In Progress", "Testing", "Done"];
const Tasks = () => {
  const { state, dispatch, filteredTaskList, isLoading } = useTask();
  const { isDarkTheme } = useTheme();

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
    let changedTask = state.taskList.filter((task, index) => {
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

    dispatch({ type: "SET_DATA", payload: updatedTaskList });
  };

  return (
    <PageWrapper>
      <Filter />
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="p-8 task_list">
          {isLoading && (isDarkTheme ? <DarkLoader /> : <LightLoader />)}
          {!isLoading &&
            taskStatusList.map((currentTask, currentIndex) => {
              return (
                <PrimaryCard key={currentIndex} cardVariant={currentTask} />
              );
            })}
        </div>
      </DragDropContext>
    </PageWrapper>
  );
};

export default Tasks;
