import React from "react";
import { Card, CardTitle, CardText, Button, Label } from "reactstrap";

import "./fund-details-card.style.css";

export const FundDetailsCard = ({ data }) => {
  const {
    short_name,
    returns,
    nav,
    expense_ratio,
    fund_manager,
    crisil_rating,
    category,
    detail_info,
  } = data;

  return (
    <Card body>
      <CardTitle className="mb-5">
        <h1>{short_name}</h1>
      </CardTitle>
      <CardText className="d-flex justify-content-between mb-5">
        <div className="fund-info">
          <h3>Fund Details</h3>
          <div className="info-entry">
            <Label className="entry-title">NAV</Label>
            &#8377;
            {nav.nav}
          </div>
          <div className="info-entry">
            <Label className="entry-title">RISK</Label>
            {crisil_rating}
          </div>
          <div className="info-entry">
            <Label className="entry-title">EXPENSE RATIO</Label>
            {expense_ratio}%
          </div>
        </div>
        <div className="fund-info">
          <h3>Returns</h3>
          <div className="info-entry">
            <Label className="entry-title">1Y</Label>
            {returns.year_1}%
          </div>
          <div className="info-entry">
            <Label className="entry-title">3Y</Label>
            {returns.year_3}%
          </div>
          <div className="info-entry">
            <Label className="entry-title">5Y</Label>
            {returns.year_5}%
          </div>
        </div>
        <div className="fund-info">
          <h3>Misc.</h3>
          <div className="info-entry">
            <Label className="entry-title">Manager</Label>
            {fund_manager}
          </div>
          <div className="info-entry">
            <Label className="entry-title">Category</Label>
            {category}
          </div>
          <div className="info-entry">
            <Label className="entry-title">Link</Label>
            <a href={detail_info}> Visit Website </a>
          </div>
        </div>
      </CardText>
      <Button color="primary">Invest</Button>
    </Card>
  );
};
