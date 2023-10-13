import React, { useState } from "react";
import { tabData } from "./TabData";
import TabItem from "./TabItem";
import { Button, Tooltip } from "@mui/material";
import ModalProvider from "../../Components/ModalProvider";
import { AddUpdateForm } from "../../Components";
import { Add } from "@mui/icons-material";
import { toastHandler } from "../../Utils";
import {
  setModal,
  MODALTYPES,
  modalInitialState,
} from "../../features/modal/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../features/task/taskSlice";
import { addTaskApiResponse } from "../../apiResponse/taskApiResponse";

const Tab = () => {
  const modalState = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const closeAddTaskModal = () => {
    dispatch(setModal(modalInitialState));
  };

  const addTaskHandler = async (task) => {
    try {
      const response = await addTaskApiResponse(task);
      if (response.status === 201) {
        // toastHandler("success", "Task Added");
        dispatch(addTask(response.data.task));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ul className="bg-200 flex dark:bg-600">
      {tabData.map((currentTab, tabIndex) => {
        return <TabItem key={currentTab.id} {...currentTab} />;
      })}
      <ModalProvider
        title="ADD TASK"
        isOpen={modalState.open && modalState.type === "ADD_TASK_MODAL"}
        closeModal={closeAddTaskModal}
        OpenModalAction={
          <Tooltip title="Add Task">
            <Button
              variant="contained"
              onClick={() => {
                dispatch(
                  setModal({
                    open: true,
                    type: MODALTYPES.ADD_TASK_MODAL,
                    payload: null,
                  })
                );
              }}
              sx={{
                borderRadius: "0",
                boxShadow: "none",
                backgroundColor: "#60a5fa",
                padding: "8px",
                "&:hover": { boxShadow: "none", backgroundColor: "#3b82f6" },
              }}
            >
              <Add />
            </Button>
          </Tooltip>
        }
      >
        <AddUpdateForm
          closeForm={closeAddTaskModal}
          formAction={addTaskHandler}
        />
      </ModalProvider>
    </ul>
  );
};

export default Tab;
