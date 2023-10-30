import React from "react";
import { PageWrapper } from "../../Layout";
import { PieChart } from "../../Components";
import { useDispatch, useSelector } from "react-redux";

const Metrics = () => {
  const taskList = useSelector((state) => state.task.allTaskList);

  const priorityNameList = taskList.reduce((list, currentTask) => {
    return list.includes(currentTask.priority)
      ? list
      : [...list, currentTask.priority];
  }, []);

  const priorityDataList = priorityNameList.map((currentPriority) => {
    return taskList.reduce((sum, currentTask) => {
      return currentPriority == currentTask.priority ? sum + 1 : sum;
    }, 0);
  });

  const pieData = {
    labels: priorityNameList,
    datasets: [
      {
        label: "Number of Tasks",
        data: priorityDataList,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <PageWrapper>
      <div className="flex justify-center items-center w-full py-8">
        <div className="w-[300px]">
          <PieChart data={pieData} label="PIE CHART: Showing Priority Data" />
        </div>
      </div>
    </PageWrapper>
  );
};

export default Metrics;
