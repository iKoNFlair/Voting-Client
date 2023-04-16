import React from "react";
import {
  Login,
  Verify,
  Aadhaar,
  VotingPanel,
  Success,
  Missing,
} from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AdminPanel from "./components/Admin_panel/AdminPanel";
import LoginType from "./components/Login_type/LoginType.jsx";
import AdminLogin from "./components/Admin_login/AdminLogin";
import UserLogin from "./components/User_login/UserLogin";

function App() {
  let Type;
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<LoginType />} />
          <Route path="login" element={<Login />} />
          <Route path="user_login" element={<UserLogin />} />
          <Route path="admin_login" element={<AdminLogin />} />
          <Route path="admin_panel" element={<AdminPanel />} />
          <Route path="aadhaar" element={<Aadhaar />} />
          <Route path="verify" element={<Verify />} />
          <Route path="voting_panel" element={<VotingPanel />} />
          <Route path="success" element={<Success />} />
          <Route exact path="*" element={<Missing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
