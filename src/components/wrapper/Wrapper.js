import React, { useContext } from "react";
import { ClickContext } from "../../context/ClickContext";
import { MessageContext } from "../../context/FormContext/MessageContext";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import "./Wrapper.css";
const Wrapper = () => {
  const { setError, setSuccess } = useContext(MessageContext);
  const { click, showform, setForm } = useContext(ClickContext);
  return (
    <div className={click ? "wrapper-container" : "wrapper-container-max"}>
      <div className={click ? "todo-header" : "todo-header-max"}>
        <h1>TODO APP</h1>
        <p>Manage your day to day tasks with ease with Todoapper.</p>
      </div>
      <div className="registration">
        <div className="regbuttons">
          <div
            onClick={() => {
              setForm(true);
              setError("");
              setSuccess("");
            }}
          >
            <h1>Sign in</h1>
          </div>
          <div
            onClick={() => {
              setForm(false);
              setError("");
              setSuccess("");
            }}
          >
            <h1>Sign up</h1>
          </div>
        </div>
      </div>
      <div className="formsshow">{showform ? <Login /> : <Register />}</div>
    </div>
  );
};

export default Wrapper;
