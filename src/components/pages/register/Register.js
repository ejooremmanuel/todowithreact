import React, { useContext, useState } from "react";
import { Form, Input, Button } from "semantic-ui-react";
import { UserContext } from "../../../context/UserContext";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { ClickContext } from "../../../context/ClickContext";
import { MessageContext } from "../../../context/FormContext/MessageContext";
import axios from "axios";
import { useNavigate } from "react-router";
const Register = () => {
  const navigate = useNavigate();
  const { fullname, email, password, setFullname, setEmail, setPassword } =
    useContext(UserContext);
  const [show, setshow] = useState(false);
  const { loading, setLoading } = useContext(ClickContext);
  const { setError, error, successful, setSuccess } =
    useContext(MessageContext);
  const onSubmit = async (e) => {
    e.preventDefault();
    const user = { fullname, email, password };
    try {
      setLoading(true);
      await axios.post(
        "https://todoapibyejoor.herokuapp.com/api/v1/auth/register",
        user
      );
      setFullname("");
      setEmail("");
      setPassword("");
      setSuccess("Registration successful! Please Log in.");
      setTimeout(() => {
        navigate("/");
        setLoading(false);
        setError("");
        setSuccess("");
      }, 2000);
    } catch (err) {
      setLoading(false);
      setError(err.response.data.message);
      setTimeout(() => {
        navigate("/");
        setSuccess("");
        setError("");
      }, 2000);
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
          <label>Full Name</label>
          <Input
            placeholder="Full name"
            value={fullname}
            onChange={(e) => {
              setFullname(e.target.value);
            }}
          />
        </Form.Field>
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
            type={show ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {show ? (
            <>
              <Visibility
                style={{
                  position: "absolute",
                  marginTop: "10px",
                  right: "10px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setshow(!show);
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
                  setshow(!show);
                }}
              />
            </>
          )}
        </Form.Field>
        {loading ? (
          <Button type="submit" color="blue" loading>
            Sign up
          </Button>
        ) : (
          <Button type="submit" color="blue">
            Sign up
          </Button>
        )}
      </Form>
    </>
  );
};

export default Register;
