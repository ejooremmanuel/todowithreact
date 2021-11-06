import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Wrapper from "../pages/trashWrapper/wrapper/Wrapper";
import Home from "../home/Home";
const Trash = () => {
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

export default Trash;
