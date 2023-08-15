import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { PageWrapper } from "../../Layout";
import { useTask } from "../../Context/TaskContext";
import { PrimaryCard, Filter } from "../../Components";

const Tasks = () => {
  const { state, dispatch, filteredTaskList } = useTask();

  const gridFour = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "16px",
  };

  const taskStatusList = state.taskList.reduce((list, currentTask) => {
    return list.includes(currentTask.status)
      ? list
      : [...list, currentTask.status];
  }, []);

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
