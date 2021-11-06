import React from "react";
import Wrapper from "../../default/Wrapper";
import Sidebar from "../../sidebar/Sidebar";
import Home from "../../home/Home";
const Userpage = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
      {user ? (
        <>
          <Wrapper />
          <Sidebar />
        </>
      ) : (
        <Home />
      )}
    </div>
  );
};

export default Userpage;
