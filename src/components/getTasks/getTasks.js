import { Delete, Edit } from "@material-ui/icons";
import React, { useState } from "react";
import { allTasks } from "./taskCall";

const GetTasks = () => {
  const [task, setTask] = useState([]);
  allTasks().then((res) => {
    return setTask(res);
  });
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
