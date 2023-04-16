import React, { useState } from "react";
import "./Success.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Success = ({ symbol, partyName, candidateName }) => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  }, 10000);

  // const [count, setCount] = useState(10);

  // useEffect(() => {
  //   const reverseCount = setInterval(() => {
  //     setCount((prevCount) => prevCount - 1);
  //   }, 1000);

  //   return () => {
  //     clearInterval(reverseCount);
  //   };
  // }, []);

  return (
    <div className="s_wrapper">
      <h1 style={{ color: "orange" }}>Vote Casted Successfully For</h1>
      <div className="container success">
        <h3>
          {candidateName} - {partyName}
        </h3>
        <img src={symbol} alt="" className="img-fluid" />
      </div>
      <h2
        style={{
          textAlign: "center",
          color: "green",
        }}
      >
        Thanks For Voting
      </h2>
      <h4
        style={{
          textAlign: "center",
          // color: "green",
        }}
      >
        The Window Will logout in 10 Seconds !!
      </h4>
    </div>
  );
};

export default Success;
