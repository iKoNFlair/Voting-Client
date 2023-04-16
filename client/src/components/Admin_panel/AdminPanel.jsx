import React, { useContext, useState } from "react";
import aslogo from "../../images/aslogo.png";
import "./AdminPanel.css";
import Candidate from "../Candidate/Candidate";
import { location, candidateData } from "../../ElectionData";
import { v4 as uuidv4 } from "uuid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  Select,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
} from "@mui/material";
import { Data } from "../../Data";
import CandidateList from "../Candidate_list/CandidateList";
import { ColorRing } from "react-loader-spinner";
import { Navigate, useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AdminPanel = () => {
  const [candidateList, setCandidateList] = useState(candidateData);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  const [newCandidate, setNewCandidate] = useState({
    symbol: "",
    partyName: "",
    candidateName: "",
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setNewCandidate((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setCandidateList([...candidateList, newCandidate]);
    setNewCandidate({
      symbol: "",
      partyName: "",
      candidateName: "",
    });
    handleClose();
    console.log(candidateList);
  };

  const deleteCandidate = (id) => {
    console.log(id);
    setCandidateList((prevData) => {
      return prevData.filter((c, index) => {
        return index !== id;
      });
    });
  };

  const handleLogOut = () => {
    navigate("/");
  };

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
  else
    return (
      <div className="v_wrapper">
        <div className="v_head">
          <div className="heading">
            <img src={aslogo} alt="" className="img-fluid" />
            <span>Election Commision Of India</span>
          </div>
        </div>
        <div className="v_mid">
          <>
            <div
              className="loc alert alert-primary container mt-1"
              role="alert"
            >
              Location Based on Aadhaar : <b>{location}</b>
            </div>
            <div className="btns">
              <Button
                className="add-btn"
                sx={{ width: "200px" }}
                variant="contained"
                onClick={handleOpen}
              >
                Add Candidate
              </Button>
              <Button
                className="add-btn"
                sx={{ width: "200px" }}
                variant="contained"
                onClick={handleLogOut}
              >
                Logout
              </Button>
            </div>

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Add New Candidate
                </Typography>
                <form onSubmit={handleFormSubmit}>
                  <TextField
                    sx={{ width: "250px" }}
                    label="Enter User"
                    name="candidateName"
                    value={newCandidate.candidateName}
                    margin="dense"
                    onChange={handleInputChange}
                  />
                  <FormControl sx={{ width: "250px" }} margin="dense">
                    <InputLabel id="demo-select-small">Party Name</InputLabel>
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      name="partyName"
                      value={newCandidate.partyName}
                      label="Party Name"
                      onChange={handleInputChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={"BJP"}>BJP</MenuItem>
                      <MenuItem value={"INC"}>INC</MenuItem>
                      <MenuItem value={"BSP"}>BSP</MenuItem>
                      <MenuItem value={"CPI"}>CPI</MenuItem>
                      <MenuItem value={"SP"}>SP</MenuItem>
                    </Select>
                  </FormControl>
                  <Button
                    sx={{ width: "250px" }}
                    variant="contained"
                    type="submit"
                  >
                    Add
                  </Button>
                </form>
              </Box>
            </Modal>

            <div
              className="tab container text-center"
              style={{ fontWeight: "600", backgroundColor: "white" }}
            >
              <div className="row row-cols-5">
                <div className="col">Election symbol</div>
                <div className="col">Party</div>
                <div className="col">Candidate Name</div>
                <div className="col">Total Votes</div>
              </div>
            </div>

            <div className="candidate_list container ">
              {candidateList.map((e, i) => (
                <CandidateList
                  key={uuidv4()}
                  partyName={e.partyName}
                  candidateName={e.candidateName}
                  removeCandidate={() => deleteCandidate(i)}
                  ind={i}
                />
              ))}
            </div>
          </>
        </div>

        <div className="v_footer">
          <span>Made with ❤️ by PRRSS</span>
        </div>
      </div>
    );
};

export default AdminPanel;
