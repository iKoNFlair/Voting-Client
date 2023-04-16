import React, { useState } from "react";
import { ColorRing } from "react-loader-spinner";
import aslogo from "../../images/aslogo.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Aadhaar.css";
import { useNavigate } from "react-router-dom";

const Verify = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    // alert("Aadhaar Entered Successfully");
    e.preventDefault();
    navigate("/verify");
  };

  const handleOtp = (e) => {
    setOtp(e.target.value);
    console.log(e.target.value);
  };

  const [otp, setOtp] = useState(""); //OTP

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
      <div className="aadhaar_wrapper">
        <div className="content">
          <div className="img">
            <img src={aslogo} alt="" className="img-fluid" />
          </div>
          <h3>Enter Aadhar</h3>
          <form method="post" action="/auth" onSubmit={handleSubmit}>
            <TextField
              sx={{ width: "250px" }}
              label="Enter Aadhaar"
              type="password"
              value={otp}
              onChange={handleOtp}
            />
            <Button sx={{ width: "250px" }} variant="contained" type="submit">
              Get OTP
            </Button>
          </form>
        </div>
      </div>
    );
};

export default Verify;
