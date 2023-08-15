import React from "react";
import { FilterList, Close, ExpandMore } from "@mui/icons-material";
import {
  Button,
  Menu,
  MenuItem,
  Fade,
  IconButton,
  Checkbox,
  FormControlLabel,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import { useTask } from "../../Context/TaskContext";

const Filter = () => {
  const { state, dispatch } = useTask();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const assigneeList = state.taskList.reduce((list, currentTask) => {
    return list.includes(currentTask.assignee)
      ? list
      : [...list, currentTask.assignee];
  }, []);

  const priorityList = state.taskList.reduce((list, currentTask) => {
    return list.includes(currentTask.priority)
      ? list
      : [...list, currentTask.priority];
  }, []);

  return (
    <div>
      <Button
        variant="outlined"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          textTransform: "capitalize",
        }}
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <FilterList />
        Add Filter
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        // sx={{ padding: "16px" }}
      >
        <div className="flex justify-between items-center px-4">
          <span>Filter</span>
          <IconButton onClick={handleClose}>
            <Close />
          </IconButton>
        </div>
        <div className="flex flex-col w-[250px] px-4 gap-2">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <span className="text-sm">Filter By Assignee</span>
            </AccordionSummary>
            <AccordionDetails>
              <div className="flex flex-col">
                {assigneeList.map((currentAssignee, currentIndex) => {
                  return (
                    <FormControlLabel
                      key={currentIndex}
                      control={
                        <Checkbox
                          key={currentIndex}
                          defaultChecked
                          sx={{
                            color: "lightblue",
                            "&.Mui-checked": {
                              color: "blue",
                            },
                          }}
                        />
                      }
                      label={currentAssignee}
                    />
                  );
                })}
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <span className="text-sm">Filter By Priority</span>
            </AccordionSummary>
            <AccordionDetails>
              <div className="flex flex-col">
                <div>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    {priorityList.map((currentPriority, currentIndex) => {
                      return (
                        <div key={currentIndex}>
                          <FormControlLabel
                            value={currentPriority}
                            control={<Radio />}
                            label={currentPriority}
                          />
                        </div>
                      );
                    })}
                  </RadioGroup>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </Menu>
    </div>
  );
};

export default Filter;
