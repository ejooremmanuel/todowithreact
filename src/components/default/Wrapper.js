import { Menu } from "@material-ui/icons";
import React, { useContext } from "react";
import { ClickContext } from "../../context/ClickContext";
import Createtask from "../createTask/createTask";
import GetTasks from "../getTasks/getTasks";
import "./Wrapper.css";
const UserPage = () => {
  const { click, setClick } = useContext(ClickContext);
  return (
    <div className={click ? "wrapper-container" : "wrapper-container-max"}>
      <div
        onClick={() => {
          setClick(!click);
        }}
      >
        <Menu className="wrapper-menu-icon" />
      </div>

      <div className={click ? "todo-header" : "todo-header-max"}>
        <h1>Todo App</h1>
        <p>Manage your day to day tasks with ease with Todoapper.</p>
      </div>
      <div className="task-wrapper">
        <div className="task-create-wrapper">
          <Createtask />
        </div>
        <div className="task-display-wrapper">
          <h4>Items List</h4>
          <GetTasks />
        </div>
      </div>
    </div>
  );
};

export default UserPage;
