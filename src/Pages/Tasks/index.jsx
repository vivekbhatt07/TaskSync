import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { PageWrapper } from "../../Layout";
import { useTask } from "../../Context/TaskContext";
import { PrimaryCard, Filter } from "../../Components";

const taskStatusList = ["Ready", "In Progress", "Testing", "Done"];
const Tasks = () => {
  const { state, dispatch, filteredTaskList } = useTask();

  const gridFour = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "16px",
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
      if (`${task.id}` === `${draggableId}`) {
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

  const handleDragEnd = (result) => {
    console.log(result);
    const { destination, source } = result;
    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;
  };

  return (
    <PageWrapper>
      <Filter />
      <DragDropContext onDragEnd={handleDragEnd}>
        <div style={gridFour} className="p-8">
          {taskStatusList.map((currentTask, currentIndex) => {
            return <PrimaryCard key={currentIndex} cardVariant={currentTask} />;
          })}
        </div>
      </DragDropContext>
    </PageWrapper>
  );
};

export default Tasks;
