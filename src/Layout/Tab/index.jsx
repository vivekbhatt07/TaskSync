import React, { useState } from "react";
import { tabData } from "./TabData";
import TabItem from "./TabItem";
import { Button } from "@mui/material";
import { useTask } from "../../Context";
import ModalProvider from "../../Components/ModalProvider";
import { AddUpdateForm } from "../../Components";

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
          <Button variant="contained" onClick={openAddModal}>
            ADD TASK
          </Button>
        }
      >
        <AddUpdateForm closeForm={closeAddModal} formAction={addNewTask} />
      </ModalProvider>
    </ul>
  );
};

export default Tab;
