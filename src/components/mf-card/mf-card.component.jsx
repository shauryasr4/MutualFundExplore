import React from "react";
import { Card, CardTitle, Button, Label } from "reactstrap";
import { Link } from "react-router-dom";

import "./mf-card.style.css";


export const SummaryCard = ({ data }) => {
  
  const { name, fund_category, fund_type, returns, plan, code } = data;

  return (
    <Card body className="mt-5 mb-5">
      <CardTitle className="summary-title mb-5">
        <Link to={`/explore/${code}`}>{name}</Link>
      </CardTitle>
      <div className="fund-details">
        <div className="fund-description">
          <div>
            <Label>Category</Label>
            {fund_category || "-"}
          </div>
          <div>
            <Label>Type</Label>
            {fund_type || "-"}
          </div>
          <div>
            <Label>Plan</Label>
            {plan || "-"}
          </div>
        </div>

        <div className="fund-description">
          <div
            style={returns.year_1 > 0 ? { color: "green" } : { color: "red" }}
          >
            <Label>1Y Return</Label>
            {returns.year_1 + "%"}
          </div>
          <div
            style={returns.year_3 > 0 ? { color: "green" } : { color: "red" }}
          >
            <Label>3Y Return</Label>
            {returns.year_3 + "%"}
          </div>
        </div>
      </div>
      <Button color="primary" className="summary-card-button">
        View Info
      </Button>
    </Card>
  );
};
