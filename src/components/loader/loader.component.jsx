import React from "react";
import { Spinner } from "reactstrap";

export const Loader = () => {
  return (
    <Spinner
      color="primary"
      style={{ width: "7rem", height: "7rem" }}
      type="grow"
    />
  );
};
