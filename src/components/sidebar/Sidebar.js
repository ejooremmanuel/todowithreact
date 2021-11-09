import { AddAPhoto, Book, Delete } from "@material-ui/icons";
import React, { useContext, useEffect, useState } from "react";
import { ClickContext } from "../../context/ClickContext";
import { useNavigate, Link } from "react-router-dom";
import { addProfilePic } from "../../services/Services";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import "./Sidebar.css";
const Sidebar = () => {
  const { click, setClick } = useContext(ClickContext);
  const { user, dispatch } = useContext(AuthContext);
  const [i, setI] = useState(user.user.avatarSmall);
  const navigate = useNavigate();
  let profiledata = new FormData();
  const handleChange = async (e) => {
    let newImage = e.target.files[0];
    profiledata.append("upload", newImage, newImage.name);
    addProfilePic(user, profiledata, setI, dispatch);
  };

  useEffect(() => {
    user.user.avatarSmall = i;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i]);
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
          <img src={i} alt="" />
          <form>
            <label htmlFor="media">
              <AddAPhoto className="photouser" />
              <input
                style={{ display: "none" }}
                type="file"
                name=""
                id="media"
                accept="image/*"
                onChange={handleChange}
              />
            </label>
          </form>
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
