import React, { useContext } from "react";
import { voteContext } from "../../Context";
import "./Candidate.css";


const Candidate = ({ symbol, partyName, candidateName }) => {
  const vote = useContext(voteContext);
  // const voteStatus = vote.state.voted;

  const handleVote = () => {
    vote.dispatch({
      type: "vote",
      payload: { symbol, partyName, candidateName },
    });
  };

  return (
    <div class="container text-center">
      <div class="row row-cols-4">
        <div class="col">
          <img src={symbol} alt="" className="img-fluid" />
        </div>
        <div class="col">{partyName}</div>
        <div class="col"> {candidateName}</div>
        <div class="col">
          <button type="button" class="btn btn-primary" onClick={handleVote}>
            Vote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Candidate;
