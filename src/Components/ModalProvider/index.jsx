import React from "react";
import { Modal } from "@mui/material";
import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const ModalProvider = (props) => {
  const { children, OpenModalAction, isOpen, closeModal, title } = props;
  return (
    <div className="flex">
      {OpenModalAction}
      <Modal open={isOpen} onClose={closeModal}>
        <div className="text-[#292524] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] bg-[#e7e5e4] p-4 flex flex-col gap-4 rounded dark:text-[#fafaf9] dark:bg-[#292524]">
          <div className="flex justify-between items-center">
            <span className="font-medium">{title}</span>
            <IconButton
              onClick={() => closeModal()}
              className="text-[#0c0a09] dark:text-[#fafaf9] hover:text-[#0c0a09] hover:dark:text-[#0c0a09]"
            >
              <Close className="dark:text-[#fafaf9]" />
            </IconButton>
          </div>
          <div className="bg-[#fafaf9] rounded-md dark:bg-[#1c1917] overflow-hidden">
            {children}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalProvider;
