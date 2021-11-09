import React, { useContext } from "react";
import { Menu } from "@material-ui/icons";
import { ClickContext } from "../../../../context/ClickContext";
import { UserContext } from "../../../../context/UserContext";
import "./Wrapper.css";
const Wrapper = () => {
  const { click, setClick } = useContext(ClickContext);
  const { deleted } = useContext(UserContext);
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
      <h1>Deleted/Completed Items</h1>
      {deleted.length === 0 ? (
        <h1>No deleted notes</h1>
      ) : (
        deleted.map(({ title, description }, index) => (
          <div className="deleteditems" key={index}>
            <h3>{title}</h3>
            <span>{description}</span>
          </div>
        ))
      )}
    </div>
  );
};

export default Wrapper;
