import React from "react";
import { PageWrapper } from "../../Layout";
import { useTask } from "../../Context/TaskContext";
import { PrimaryCard, Filter } from "../../Components";

const Tasks = () => {
  const { state, dispatch } = useTask();

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

  return (
    <PageWrapper>
      <Filter />
      <div style={gridFour} className="p-8">
        {taskStatusList.map((currentTask, currentIndex) => {
          return <PrimaryCard key={currentIndex} cardVariant={currentTask} />;
        })}
      </div>
    </PageWrapper>
  );
};

export default Tasks;
