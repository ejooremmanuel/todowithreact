import { AddAPhoto, Book, Delete } from "@material-ui/icons";
import React, { useContext } from "react";
import { ClickContext } from "../../context/ClickContext";
import { useNavigate, Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const { click, setClick } = useContext(ClickContext);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className={click ? "sidebar_container" : "sidebar_container-hide"}>
      <div
        className="menu-icon-sidebar"
        onClick={() => {
          setClick(!click);
        }}
      >
        <i className=" triangle left icon"></i>
      </div>

      <div className="user-info">
        <div className="user-image">
          <AddAPhoto className="photouser" />
        </div>
        <h3>{user ? `Hi ${user.user.fullname}` : "Hi"}</h3>
      </div>
      <div className="sidebaritems">
        <Link to="/user">
          <div className="photouser">
            <Book />
            Notes
          </div>
        </Link>
        <hr />
        <Link to="/user/trash">
          <div className="photouser">
            <Delete />
            Trash
          </div>
        </Link>
        <hr />
      </div>
      <div className="signout">
        <div
          className="photouser"
          onClick={() => {
            localStorage.removeItem("user");
            navigate("/");
          }}
        >
          <i className="sign-out icon"></i>
          <h3>Sign out</h3>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
