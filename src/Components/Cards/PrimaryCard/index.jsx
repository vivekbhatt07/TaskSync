import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Add } from "@mui/icons-material";
import SecondaryCard from "../SecondaryCard";
import "./PrimaryCard.css";
import { useDispatch, useSelector } from "react-redux";

const PrimaryCard = ({ cardVariant }) => {
  const taskList = useSelector((state) => state.task.allTaskList);
  const currentStatusTaskList = taskList.filter((currentTask) => {
    return currentTask.status === cardVariant;
  });

  let cardVariantColor;

  if (cardVariant === "Ready") {
    cardVariantColor = "#38bdf8";
  } else if (cardVariant === "In Progress") {
    cardVariantColor = "#fb923c";
  } else if (cardVariant === "Testing") {
    cardVariantColor = "#a1a1aa";
  } else if (cardVariant === "Done") {
    cardVariantColor = "#22c55e";
  }

  return (
    <div>
      <Droppable droppableId={cardVariant}>
        {(provided, snapshot) => (
          <article
            className={`flex flex-col gap-4 ${
              snapshot.isDraggingOver ? "dragActive" : ""
            }`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <div
              className={`flex gap-2 border-b-4 p-4 justify-center items-center`}
              style={{ borderColor: cardVariantColor }}
            >
              <span className="uppercase font-semibold">{cardVariant}</span>
              <span className="text-[#5A5A5A]">
                ({currentStatusTaskList.length})
              </span>
            </div>
            <div className="flex flex-col gap-4">
              {currentStatusTaskList.map((currentTask, index) => {
                return (
                  <SecondaryCard
                    key={currentTask._id}
                    {...currentTask}
                    index={index}
                  />
                );
              })}
            </div>
            {provided.placeholder}
          </article>
        )}
      </Droppable>
    </div>
  );
};

export default PrimaryCard;
