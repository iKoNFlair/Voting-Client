import React, { useContext } from "react";
import aslogo from "../../images/aslogo.png";
import "./VotingPanel.css";
import Candidate from "../Candidate/Candidate";
import { location, candidateData } from "../../ElectionData";
import { voteContext } from "../../Context";
import Success from "../Success/Success";
import { v4 as uuidv4 } from "uuid";

const VotingPanel = () => {
  const vote = useContext(voteContext);
  const voteStatus = vote.state.voted;

  return (
    <div className="v_wrapper">
      <div className="v_head">
        <div className="heading">
          <img src={aslogo} alt="" className="img-fluid" />
          <span>Election Commision Of India</span>
        </div>
      </div>
      <div className="v_mid">
        {voteStatus ? (
          <Success
            partyName={vote.state.partyName}
            symbol={vote.state.symbol}
            candidateName={vote.state.candidateName}
          />
        ) : (
          <>
            <div className="alert alert-primary container mt-1" role="alert">
              Location Based on Aadhaar : <b>{location}</b>
            </div>
            <div
              className="container text-center"
              style={{ fontWeight: "600", backgroundColor: "white" }}
            >
              <div className="row row-cols-4">
                <div className="col">Election symbol</div>
                <div className="col">Party</div>
                <div className="col">Candidate Name</div>
                <div className="col">Vote</div>
              </div>
            </div>

            <div className="candidate_list container ">
              {candidateData.map((candidate) => (
                <Candidate
                  key={uuidv4()}
                  symbol={candidate.symbol}
                  partyName={candidate.partyName}
                  candidateName={candidate.candidateName}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="v_footer">
        <span>Made with ❤️ by PRRSS</span>
      </div>
    </div>
  );
};

export default VotingPanel;
