import React from "react";
import "./CandidateList.css";
import { Data } from "../../Data";

const CandidateList = ({
  partyName,
  candidateName,
  removeCandidate,
  id,
  ind,
}) => {
  let symbol;

  switch (partyName) {
    case "BJP":
      symbol = 0;
      break;
    case "INC":
      symbol = 1;
      break;
    case "BSP":
      symbol = 2;
      break;
    case "SP":
      symbol = 3;
      break;
    case "CPI":
      symbol = 4;
      break;

    default:
      break;
  }

  return (
    <div class="container text-center">
      <div class="cen row row-cols-5">
        <div class="col">
          <img src={Data[symbol]} alt={partyName} className="img-fluid" />
        </div>
        <div class="col">{partyName}</div>
        <div class="col"> {candidateName}</div>
        <div class="col">{ind <= 4 ? Math.floor(Math.random() * 1000) : 0}</div>
        <div class="col">
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => {
              removeCandidate(id);
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CandidateList;
