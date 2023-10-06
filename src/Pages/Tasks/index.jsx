import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { PageWrapper } from "../../Layout";
import { useTask } from "../../Context/TaskContext";
import { PrimaryCard, Filter, LightLoader, DarkLoader } from "../../Components";
import "./Tasks.css";
import { useTheme } from "../../Context/ThemeContext";
import { useDispatch } from "react-redux";

const taskStatusList = ["Ready", "In Progress", "Testing", "Done"];
const Tasks = () => {
  const dispatch = useDispatch();
  const { state } = useTask();
  const { isDarkTheme } = useTheme();

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;
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
