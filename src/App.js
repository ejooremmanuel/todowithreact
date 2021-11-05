import "semantic-ui-css/semantic.min.css";
import React, { useState, lazy, Suspense } from "react";
import { ClickContext } from "./context/ClickContext";
import { UserContext } from "./context/UserContext";
import { MessageContext } from "./context/FormContext/MessageContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageLoader from "./components/pages/Loader";
const Home = lazy(() => import("./components/home/Home"));
const UserPage = lazy(() => import("./components/pages/userpage/Userpage"));
function App() {
  const [click, setClick] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showform, setForm] = useState(false);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successful, setSuccess] = useState("");
  const [showTask, setShowTask] = useState(false);
  const [rendered, setRendered] = useState();
  return (
    <MessageContext.Provider
      value={{ error, successful, setError, setSuccess }}
    >
      <UserContext.Provider
        value={{
          fullname,
          setFullname,
          email,
          setEmail,
          password,
          setPassword,
        }}
      >
        <ClickContext.Provider
          value={{
            click,
            setClick,
            showform,
            setForm,
            loading,
            setLoading,
            showTask,
            setShowTask,
            rendered,
            setRendered,
          }}
        >
          <Router>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/user" element={<UserPage />}></Route>
              </Routes>
            </Suspense>
          </Router>
        </ClickContext.Provider>
      </UserContext.Provider>
    </MessageContext.Provider>
  );
}

export default App;
