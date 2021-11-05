/* eslint-disable react-hooks/exhaustive-deps */
import { Delete, Edit } from "@material-ui/icons";
import React, { useEffect, useContext } from "react";
import { allTasks } from "./taskCall";
import { UserContext } from "../../context/UserContext";
import "./getTasks.css";
const GetTasks = () => {
  const { task, setTask } = useContext(UserContext);
  useEffect(() => {
    allTasks().then((res) => {
      setTask(res);
    });
  }, []);

  return (
    <>
      {task.map(({ title, description, _id }, index) => {
        return (
          <div className="getTaskContainer" key={_id}>
            <div className="tasktext">
              <h3 className="gettask-heading">{title}</h3>
              <p>{description}</p>
            </div>
            <div className="task-icons">
              <Edit />
              <Delete />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default GetTasks;
