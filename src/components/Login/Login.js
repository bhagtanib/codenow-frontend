// src/components/Login.js
import React, { useEffect, useState } from "react";
import styles from "./Login.module.css";
import axios from "axios";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/slices";
import { initializeUser } from "../../util/util";

const Login = ({ onClose }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [err, setErr] = useState("");
  const navigate = useNavigate(); // Use useNavigate hook to navigate

  const dispatch = useDispatch(); //to post the user Object

  // const user = useSelector((state) => state.auth.user);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleVerifyPasswordChange = (e) => {
    setVerifyPassword(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      let token = localStorage.getItem("token");
      if (token) {
        try {
          await initializeUser();
          navigate("/home");
        } catch (err) {
          console.log("Can't fetch", err);
        }
      } else {
      }
    };

    fetchData();
  }, [navigate]);
  useEffect(() => {
    // console.log("changed err")
  }, [err])
  useEffect(() => {
    setErr("")
  }, [isSignUp])
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSignUp) {
      if (verifyPassword === password) {
      } else {
        setErr("password did not match");
        return;
      }
      try {
        const name = firstName + " " + lastName;
        const response = await axios.post(
          "https://boiling-brook-19149-8ec2377c0615.herokuapp.com/api/v1/users",
          {
            name,
            email,
            password,
          }
        );
        dispatch(
          login({
            userWithoutSensitiveInfo: response.data.userWithoutSensitiveInfo,
          })
        );
        navigate("/home");
      } catch (err) {
        // console.error("Error:", err.response.data);
        setErr(err.response.data)
      }
    } else {
      try {
        const response = await axios.post(
          "https://boiling-brook-19149-8ec2377c0615.herokuapp.com/api/v1/auth",
          { email, password }
        );

        dispatch(
          login({
            userWithoutSensitiveInfo: response.data.userWithoutSensitiveInfo,
          })
        );
        let token = response.data.token;
        axios.defaults.headers.common["x-auth-token"] = token;
        localStorage.setItem("token", token);

        navigate("/home");
      } catch (err) {
        console.log("Error:", err.response ? err.response.data : err.message);
        setErr(err.response ? err.response.data : err.message);
      }
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <div className={styles.nameInput}>
              <input
                type="name"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                required
              />
              <input
                type="name"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                required
              />
            </div>
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          {isSignUp && (
            <input
              type="password"
              placeholder="Verify Password"
              value={verifyPassword}
              onChange={handleVerifyPasswordChange}
              required
            />
          )}
          <p style={{ color: "crimson" }}> &nbsp; {err}</p>
          <button type="submit" className={styles.submitButton}>
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>
        <div>
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <span
            style={{ color: "crimson", cursor: "pointer" }}
            onClick={() => {
              setIsSignUp(!isSignUp);
            }}
          >
            {isSignUp ? "login" : "Create one"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
