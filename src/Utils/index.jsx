import toast from "react-hot-toast";
import { Delete } from "@mui/icons-material";

export const simplifiedString = (str) => {
  return str.trim().split(" ").join("").toUpperCase();
};

export const truncateString = (str, maxStrLength) => {
  if (str.length > maxStrLength) {
    return str.slice(0, maxStrLength) + "...";
  }
  return str;
};

export const toastHandler = (toastType, toastText) => {
  switch (toastType) {
    case "success":
      toast.success(toastText, {
        style: { fontSize: "12px", fontWeight: "500" },
      });
      break;
    case "error":
      toast.error(toastText, {
        style: { fontSize: "12px", fontWeight: "500" },
      });
      break;
    case "delete":
      toast.error(toastText, {
        icon: <Delete sx={{ color: "#f43f5e" }} />,
        style: { fontSize: "12px", fontWeight: "500" },
      });
      break;
  }
};
