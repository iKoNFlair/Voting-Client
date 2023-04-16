import { createContext, useReducer } from "react";

export const voteContext = createContext();

const voteState = {
  voted: false,
  partyName: "",
  symbol: "",
  candidateName: "",
};

const voteReducer = (state, action) => {
  switch (action.type) {
    case "vote":
      return {
        voted: true,
        partyName: action.payload.partyName,
        symbol: action.payload.symbol,
        candidateName: action.payload.candidateName,
      };
  }
};

export const VoteStatusProvider = (props) => {
  const [state, dispatch] = useReducer(voteReducer, voteState);
  return (
    <voteContext.Provider value={{ state, dispatch }}>
      {props.children}
    </voteContext.Provider>
  );
};
