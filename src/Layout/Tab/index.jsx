import React, { useState } from "react";
import { tabData } from "./TabData";
import TabItem from "./TabItem";
import { Button, Tooltip } from "@mui/material";
import { useTask } from "../../Context";
import ModalProvider from "../../Components/ModalProvider";
import { AddUpdateForm } from "../../Components";
import { Add } from "@mui/icons-material";
import { toastHandler } from "../../Utils";

const Tab = () => {
  const { addNewTask } = useTask();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const openAddModal = () => setIsAddModalOpen(true);
  const closeAddModal = () => setIsAddModalOpen(false);

  return (
    <ul className="bg-200 flex dark:bg-600">
      {tabData.map((currentTab, tabIndex) => {
        return <TabItem key={currentTab.id} {...currentTab} />;
      })}
      <ModalProvider
        title="ADD TASK"
        isOpen={isAddModalOpen}
        closeModal={closeAddModal}
        OpenModalAction={
          <Tooltip title="Add Task">
            <Button
              variant="contained"
              onClick={() => {
                openAddModal();
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
        <AddUpdateForm closeForm={closeAddModal} formAction={addNewTask} />
      </ModalProvider>
    </ul>
  );
};

export default Tab;
