import React from "react";

import { SummaryCard } from "../mf-card/mf-card.component";

import "./list.style.css";

export const List = (props) => {
  const { data } = props;

  return (
    <div className="list-container">
      {data.map((mutualFund) => (
        <SummaryCard key={mutualFund.code} data={mutualFund} />
      ))}
    </div>
  );
};
