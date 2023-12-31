import React from "react";
import {
  FilterList,
  Close,
  ExpandMore,
  Search,
  Clear,
} from "@mui/icons-material";
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
// import { useTask } from "../../Context/TaskContext";
import "./Filter.css";
import { useDispatch, useSelector } from "react-redux";

const Filter = () => {
  const taskList = useSelector((state) => state.task.allTaskList);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const assigneeList = taskList.reduce((list, currentTask) => {
    return list.includes(currentTask.assignee)
      ? list
      : [...list, currentTask.assignee];
  }, []);

  const priorityList = taskList.reduce((list, currentTask) => {
    return list.includes(currentTask.priority)
      ? list
      : [...list, currentTask.priority];
  }, []);

  return (
    <div className="flex flex-col gap-4 py-4 px-8 md:flex-row">
      {/* <div className="relative flex input_filter_wrap bg-[#fff]">
        <label className="flex gap-2 px-2 text-800">
          <div className="py-2">
            <Search />
          </div>
          <input
            className="input_filter"
            placeholder="Search by Name, Type  and Assignee"
            type="search"
            value={state.filterBy.searchText}
            onChange={(e) => {}}
          />
        </label>
      </div>
      <div className="flex gap-2">
        <Button
          variant="outlined"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            textTransform: "capitalize",
          }}
          className="basis-1/2 md:basis-auto"
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
          sx={{ padding: "16px" }}
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
                            value={currentAssignee}
                            checked={Boolean(
                              state.selectedAssigneeList.find(
                                (currentItem) => currentItem == currentAssignee
                              )
                            )}
                            onChange={(e) => {
                              dispatch({
                                type: "FILTER_BY_ASSIGNEE",
                                payload: {
                                  label: "ASSIGNEE",
                                  value: e.target.value,
                                },
                              });
                            }}
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
                      name="radio-buttons-group"
                    >
                      {priorityList.map((currentPriority, currentIndex) => {
                        return (
                          <div key={currentIndex}>
                            <FormControlLabel
                              value={currentPriority}
                              control={
                                <Radio
                                  value={currentPriority}
                                  checked={
                                    state.filterBy.priority == currentPriority
                                  }
                                  onChange={(e) => {
                                    dispatch({
                                      type: "FILTER_BY_PRIORITY",
                                      payload: {
                                        label: "PRIORITY",
                                        value: e.target.value,
                                      },
                                    });
                                  }}
                                />
                              }
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
        <Button
          variant="outlined"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            textTransform: "capitalize",
          }}
          className="basis-1/2 md:basis-auto"
          onClick={(e) => {}}
        >
          <Clear />
          Clear Filter
        </Button>
      </div> */}
    </div>
  );
};

export default Filter;
