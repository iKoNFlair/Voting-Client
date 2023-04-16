import React, { useContext, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import "./LoginType.css";
import aslogo from "../../images/aslogo.png";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";

const LoginType = () => {
  const navigate = useNavigate();

  const handleAdminLogin = () => {
    navigate("/admin_login");
  };

  const handleUserLogin = () => {
    navigate("/user_login");
  };
  
  //   const handleSubmit = (e) => {
  //     // alert("User Name and Password Submitted");
  //     e.preventDefault();
  //     navigate("/login");
  //   };

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
          <Button
            sx={{ width: "250px" }}
            variant="contained"
            onClick={() => {
              handleAdminLogin();
            }}
          >
            Admin Login
          </Button>
          <Button
            sx={{ width: "250px" }}
            variant="contained"
            onClick={() => {
              handleUserLogin();
            }}
          >
            User Login
          </Button>
        </div>
      </div>
    );
};

export default LoginType;
