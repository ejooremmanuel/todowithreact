/* eslint-disable react-hooks/exhaustive-deps */
import { Delete, Edit } from "@material-ui/icons";
import React, { useEffect, useContext } from "react";
import { allTasks } from "./taskCall";
import { UserContext } from "../../context/UserContext";
import { DeleteTask } from "../../services/Services";
import "./getTasks.css";
const GetTasks = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const { task, setTask, deleted, setDeleted } = useContext(UserContext);
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
              <Edit style={{ cursor: "pointer" }} />
              <Delete
                style={{ cursor: "pointer" }}
                onClick={() => {
                  DeleteTask(_id, user)
                    .then((res) => {
                      setDeleted([
                        {
                          title: res.data.title,
                          description: res.data.description,
                          _id: res.data._id,
                        },
                        ...deleted,
                      ]);
                      setTask(task.filter((task) => task._id !== _id));
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default GetTasks;
