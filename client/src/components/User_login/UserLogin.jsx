import React, { useState } from "react";
import { ColorRing } from "react-loader-spinner";
import "./UserLogin.css";
import aslogo from "../../images/aslogo.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";

const UserLogin = (Type) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    // alert("User Name and Password Submitted");
    e.preventDefault();
    navigate("/aadhaar");
  };

  const handleUser = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };
  const [name, setName] = useState(""); //user name
  const [password, setPassword] = useState(""); //user password

  const [Loader, setLoader] = useState(true);
  setTimeout(() => {
    setLoader(false);
  }, 1000);
  if (Loader === true)
    return (
      <div className="loader">
        <ColorRing
          wrapperStyle={{
            height: "20vh",
            width: "20vw",
          }}
        />
      </div>
    );
  if (Loader === false)
    return (
      <div className="login_wrapper">
        <div className="content">
          <div className="img">
            <img src={aslogo} alt="" className="img-fluid" />
          </div>
          <h3>Welcome To E-Voting</h3>
          <form method="post" action="/login" onSubmit={handleSubmit}>
            <TextField
              sx={{ width: "250px" }}
              label="Enter User"
              value={name}
              onChange={handleUser}
            />
            <TextField
              sx={{ width: "250px" }}
              label="Enter Password"
              type="password"
              value={password}
              onChange={handlePassword}
            />
            <Button sx={{ width: "250px" }} variant="contained" type="submit">
              Login
            </Button>
          </form>
        </div>
      </div>
    );
};

export default UserLogin;
