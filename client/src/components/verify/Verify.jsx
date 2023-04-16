import React, { useState } from "react";
import { ColorRing } from "react-loader-spinner";
import aslogo from "../../images/aslogo.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Verify.css";

import { useNavigate } from "react-router-dom";

const Verify = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    alert("OTP Submitted Successfully");
    e.preventDefault();
    navigate("/voting_panel");
  };

  const handleOtp = (e) => {
    setOtp(e.target.value);
    console.log(e.target.value);
  };

  const [otp, setOtp] = useState(""); //OTP

  const [Loader, setLoader] = useState(true);
  setTimeout(() => {
    setLoader(false);
  }, 1500);
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
      <div className="verify_wrapper">
        <div className="content">
          <div className="img">
            <img src={aslogo} alt="" className="img-fluid" />
          </div>
          <h3>Verify Aadhar</h3>
          <form onSubmit={handleSubmit}>
            <TextField
              sx={{ width: "250px" }}
              label="Enter OTP"
              type="password"
              value={otp}
              onChange={handleOtp}
            />
            <Button sx={{ width: "250px" }} variant="contained" type="submit">
              Verify OTP
            </Button>
          </form>
        </div>
      </div>
    );
};

export default Verify;
