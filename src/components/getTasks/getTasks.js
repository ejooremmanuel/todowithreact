/* eslint-disable react-hooks/exhaustive-deps */
import { Delete, Edit } from "@material-ui/icons";
import React, { useEffect, useContext } from "react";
import { allTasks } from "./taskCall";
import { UserContext } from "../../context/UserContext";
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
          <div
            style={{
              backgroundColor: "#fff",
              height: "50px",
              // position: "absolute",
              width: "60%",
              paddingLeft: "10px",
              paddingTop: "3px",
              display: "flex",
              alignItems: "start",
              borderRadius: "10px",
              marginTop: "10px",
              justifyContent: "space-between",
            }}
            key={_id}
          >
            <div>
              <h3>{title}</h3>
              <p style={{ position: "relative", bottom: "15px" }}>
                {description}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
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
