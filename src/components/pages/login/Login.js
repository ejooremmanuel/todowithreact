import React, { useState, useContext } from "react";
import { Form, Input, Button } from "semantic-ui-react";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { UserContext } from "../../../context/UserContext";
import { ClickContext } from "../../../context/ClickContext";
import { AuthContext } from "../../../context/AuthContext/AuthContext";
import { MessageContext } from "../../../context/FormContext/MessageContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  // States
  const { setError, error, successful, setSuccess } =
    useContext(MessageContext);
  const [showm, setshowm] = useState(false);
  const { email, password, setEmail, setPassword } = useContext(UserContext);
  const { loading, setLoading } = useContext(ClickContext);
  const { dispatch } = useContext(AuthContext);

  //  Form submit handler
  const onSubmit = async (e) => {
    e.preventDefault();
    let user = { email, password };
    dispatch({ type: "LOGIN_START" });
    try {
      setLoading(true);
      let res = await axios.post(
        "https://todoapibyejoor.herokuapp.com/api/v1/auth/login",
        user
      );
      setSuccess(res.data.message);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      setTimeout(() => {
        navigate("/user");
        setLoading(false);
        setSuccess("");
        setError("");
      }, 2000);
    } catch (err) {
      setLoading(false);
      console.log(err.response.data.message);
      setError(err.response.data.message);
      setTimeout(() => {
        navigate("/");
        setSuccess("");
        setError("");
      }, 1000);
    }
  };

  return (
    <>
      {error.length > 0 ? (
        <div
          style={{
            color: "rgb(255, 255,255)",
            backgroundColor: "red",
            width: "80%",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "5px",
          }}
        >
          {error}
        </div>
      ) : (
        ""
      )}
      {successful.length > 0 ? (
        <div
          style={{
            color: "rgb(255, 255,255)",
            backgroundColor: "green",
            width: "80%",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "5px",
          }}
        >
          {successful}
        </div>
      ) : (
        ""
      )}
      <Form style={{ width: "80%" }} onSubmit={onSubmit}>
        <Form.Field required>
          <label>Email Address</label>
          <Input
            placeholder="Email Address"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Field>
        <Form.Field required>
          <label>Password</label>
          <Input
            placeholder="Password"
            type={showm ? "text" : "password"}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {showm ? (
            <>
              <Visibility
                style={{
                  position: "absolute",
                  marginTop: "10px",
                  right: "10px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setshowm(!showm);
                }}
              />
            </>
          ) : (
            <>
              <VisibilityOff
                style={{
                  position: "absolute",
                  marginTop: "10px",
                  right: "10px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setshowm(!showm);
                }}
              />
            </>
          )}
        </Form.Field>
        {loading ? (
          <Button type="submit" color="blue" loading>
            Sign in
          </Button>
        ) : (
          <Button type="submit" color="blue">
            Sign in
          </Button>
        )}
      </Form>
    </>
  );
};

export default Login;
