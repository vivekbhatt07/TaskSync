import React from "react";
import moment from "moment";
import { Draggable } from "react-beautiful-dnd";
import Tooltip from "@mui/material/Tooltip";
import Chip from "@mui/material/Chip";
import "./SecondaryCard.css";
import {
  ArrowDownward,
  ArrowUpward,
  ErrorRounded,
  AccessTimeFilled,
} from "@mui/icons-material";

const SecondaryCard = (props) => {
  const {
    id,
    name,
    summary,
    assignee,
    effortSpent,
    endDate,
    priority,
    startDate,
    status,
    type,
    index,
  } = props;

  let cardPriority, cardPriorityColor;

  if (priority === "High") {
    cardPriority = <ErrorRounded />;
    cardPriorityColor = "#f87171";
  } else if (priority === "Medium") {
    cardPriority = <ArrowUpward />;
    cardPriorityColor = "#fbbf24";
  } else if (priority === "Low") {
    cardPriority = <ArrowDownward />;
    cardPriorityColor = "#4ade80";
  }

  const startDateConverted = moment(startDate).format("LL");
  const endDateConverted = moment(endDate).format("LL");

  return (
    <div>
      <Draggable draggableId={id.toString()} index={index}>
        {(provided, snapshot) => (
          <article
            className={`rounded-sm p-4 bg-[#fff] flex flex-col gap-2 secondaryCard relative dark:bg-800 ${
              snapshot.isDragging ? "dragging" : ""
            }`}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <h3 className="text-xl">{name}</h3>
            <p className="text-sm text-[#404040] dark:text-400">{summary}</p>
            <div className="flex gap-4">
              <span className="text-xs font-medium">Task Type:</span>
              <span className="text-xs">{type}</span>
            </div>
            <div className="border-b pb-4 flex gap-4 border-[#ddd]">
              <span className="text-xs font-medium">Assigned By:</span>
              <span className="text-xs">{assignee}</span>
            </div>
            <div className="absolute right-[5%] top-[5%] flex gap-3">
              <span className="text-[#7f7d7d]">
                <Tooltip title={`${effortSpent} hrs spent`}>
                  <AccessTimeFilled />
                </Tooltip>
              </span>
              <span style={{ color: cardPriorityColor }}>
                <Tooltip title={`Priority ${priority}`}>{cardPriority}</Tooltip>
              </span>
            </div>
            <div className="flex justify-between">
              <Tooltip title="Start Date">
                <span className="px-4 py-2 rounded-full bg-200 text-[12px] dark:bg-600">
                  {startDateConverted}
                </span>
              </Tooltip>
              <Tooltip title="End Date">
                <span className="px-4 py-2 rounded-full bg-200 text-[12px] dark:bg-600">
                  {endDateConverted}
                </span>
              </Tooltip>
            </div>
          </article>
        )}
      </Draggable>
    </div>
  );
};

export default SecondaryCard;
