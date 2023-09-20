import React from "react";
import moment from "moment";
import { Draggable } from "react-beautiful-dnd";
import Tooltip from "@mui/material/Tooltip";
import "./SecondaryCard.css";
import {
  ArrowDownward,
  ArrowUpward,
  ErrorRounded,
  AccessTimeFilled,
  MoreVert,
  Delete,
  Edit,
  ArrowCircleUpRounded,
  ArrowCircleDownRounded,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { truncateString } from "../../../Utils";
import { useTask } from "../../../Context";

const SecondaryCard = (props) => {
  const { deleteTask } = useTask();
  const {
    _id,
    name,
    summary,
    assignee,
    effortSpent = 20,
    endDate,
    priority,
    startDate,
    status,
    taskType,
    index,
  } = props;

  let cardPriority, cardPriorityColor;

  if (priority === "High") {
    cardPriority = <ErrorRounded sx={{ fontSize: "16px" }} />;
    cardPriorityColor = "#f87171";
  } else if (priority === "Medium") {
    cardPriority = <ArrowCircleUpRounded sx={{ fontSize: "16px" }} />;
    cardPriorityColor = "#fbbf24";
  } else if (priority === "Low") {
    cardPriority = <ArrowCircleDownRounded sx={{ fontSize: "16px" }} />;
    cardPriorityColor = "#4ade80";
  }

  const startDateConverted = moment(startDate).format("LL");
  const endDateConverted = moment(endDate).format("LL");

  return (
    <div>
      <Draggable draggableId={_id} index={index}>
        {(provided, snapshot) => (
          <article
            className={`rounded-sm p-4 bg-[#fff] flex flex-col gap-2 secondaryCard relative dark:bg-800 ${
              snapshot.isDragging ? "dragging" : ""
            }`}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <div className="flex gap-2 border-b border-[#ddd] justify-between pb-2">
              <div className="flex flex-col gap-2">
                <h3 className="text-base">{name}</h3>
                <p className="text-sm text-[#404040] dark:text-400">
                  {truncateString(summary, 30)}
                </p>
                <div className="flex gap-4">
                  <span className="text-xs font-medium">Task Type:</span>
                  <span className="text-xs">{taskType}</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-xs font-medium">Assigned By:</span>
                  <span className="text-xs">{assignee}</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-xs font-medium">Priority:</span>
                  <span
                    className="text-xs flex items-center gap-1"
                    style={{ color: cardPriorityColor }}
                  >
                    {priority} {cardPriority}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-3 bg-200 items-center rounded-full px-1 py-2 justify-start self-start">
                {/* <span className="text-[#7f7d7d]">
                  <Tooltip title={`${effortSpent} hrs spent`}>
                    <AccessTimeFilled />
                  </Tooltip>
                </span> */}
                <Tooltip title="Delete">
                  <IconButton onClick={() => deleteTask(_id)}>
                    <Delete />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Edit">
                  <IconButton>
                    <Edit />
                  </IconButton>
                </Tooltip>
              </div>
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
