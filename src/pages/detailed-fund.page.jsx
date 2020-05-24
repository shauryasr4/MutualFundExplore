import React, { useState, useEffect } from "react";

import { Loader } from "../components/loader/loader.component";
import { getMututalFundDetails } from "../api/communication-manager";
import { FundDetailsCard } from "../components/fund-details-card/fund-details-card.component";

export const FundPage = (props) => {
  console.log(props);
  const fundId = props.match.params.fundId;
  let [fundDetails, setFundDetails] = useState({});
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function populateData() {
      const response = await getMututalFundDetails(fundId);
      setFundDetails(response);
      setIsLoading(false);
    }
    populateData();
  }, [fundId]);

  return (
    <div style={{ width: "50%" }}>
      {isLoading ?
        <Loader />
        : 
        <FundDetailsCard data={fundDetails[0]} />
      }
    </div>
  );
};
