import React, { useState, useContext } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./createTask.css";
import { UserContext } from "../../context/UserContext";
const CreateTask = () => {
  const { task, setTask } = useContext(UserContext);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const onSubmit = async (e) => {
    let token = user.token;
    e.preventDefault();
    const data = {
      title,
      description,
    };

    let config = {
      method: "post",
      url: "https://todoapibyejoor.herokuapp.com/api/v1/user/createtask",
      headers: {
        "access-token": token,
        "Content-Type": "application/json",
      },
      data: data,
    };

    try {
      let { data } = await axios(config);
      setDescription("");
      setTitle("");
      setTask([
        {
          title: data.todo.title,
          description: data.todo.description,
          _id: data.todo._id,
        },
        ...task,
      ]);
      navigate("/user");
    } catch (err) {
      console.log(err.response.data);
    }
  };
  return (
    <div className="task-container">
      <h4>Add a new task</h4>
      <Form onSubmit={onSubmit} style={{ width: "100%" }}>
        <Form.Field>
          <label>Title</label>
          <input
            value={title}
            className="inputareatask"
            placeholder="E.g Meeting with the team..."
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            style={{ width: "100%" }}
          />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <textarea
            value={description}
            className="inputareatask"
            style={{ resize: "none", height: "80px", width: "100%" }}
            placeholder="E.g Meeting with the team..."
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </Form.Field>
        <Button type="submit" color="blue">
          Add Task
        </Button>
      </Form>
    </div>
  );
};

export default CreateTask;
